import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axios_instance";

import Toolbar from "../../components/Editor/Toolbar";
import Canvas from "../../components/Editor/Canvas";
import * as E from "../../styles/Editor/EditStyle";

function BookDetail() {
  const { bookId } = useParams();
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedText, setSelectedText] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  // 페이지 조회
  useEffect(async () => {
    try {
      const response = await axiosInstance.get(`/${bookId}/page/all`);
      const pagesData = response.data.data.pages;

      if (pagesData && pagesData.length > 0) {
        setPages(pagesData);
        setCurrentPage(pagesData[0].pageNumber); // 첫 번째 페이지로 설정
      } else {
        // 페이지가 없으면 새 페이지 생성
        const newPageResponse = await axiosInstance.post(`/${bookId}/page`);
        const newPage = newPageResponse.data.data;
        setPages([{
          pageId: newPage.pageId,
          pageNumber: newPage.pageNumber,
          elements: []
        }]);
        setCurrentPage(newPage.pageNumber);  // 새로 생성된 페이지 번호로 설정
      }
    } catch (error) {
      console.error("페이지 조회 중 오류:", error);
    } finally {
      setLoading(false); // 로딩 완료
    }
  }, []);

  // 페이지 추가
  const addPage = async () => {
    try {
      await axiosInstance.post(`/${bookId}/page`);
      window.location.reload();
    } catch (error) {
      console.error("페이지 추가 중 오류:", error);
    }
  };

  // 페이지 삭제
  const deletePage = async () => {
    if (pages.length > 1) {
      await axiosInstance.delete(`/${bookId}/page/${currentPage}`);
      window.location.reload();
    } else {
      alert("최소 한 개의 페이지는 남아 있어야 합니다!");
    }
  };

  // 페이지 저장
  const savePage = async () => {
    try {
      const pageData = pages[currentPage-1];

      const elements = pageData.elements.map((element) => ({
        elementType: element.type === "text" ? "TEXT" : "IMAGE",
        xPosition: element.x ? element.x.toString() : "0",
        yPosition: element.y ? element.y.toString() : "0",
        content: element.type === "text" ? element.text : element.src,
      }));

      const response = await axiosInstance.post(`/${bookId}/page/${currentPage}`, elements);

      console.log("페이지 저장 성공:", response.data);
      alert("페이지가 성공적으로 저장되었습니다!");
    } catch (error) {
      console.error("페이지 저장 중 오류:", error);
      alert("페이지 저장에 실패했습니다.");
    }
  };

  const addText = () => {
    setPages((prev) => {
      const newPages = [...prev];

      const newId = newPages[currentPage-1].elements.length+1;

      const newElement = {
        id: newId,
        type: "text",
        text: "입력하세요",
        width: 150,
        height: 50,
        x: 50,
        y: 50,
        fontSize: 10,
        fontFamily: "pretendard",
      };

      newPages[currentPage-1] = {
        ...newPages[currentPage-1],
        elements: [...newPages[currentPage-1].elements, newElement],
      };

      return newPages;
    });
  };

  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPages((prev) => {
          const newPages = [...prev];

          // ✅ 현재 페이지가 존재하지 않으면 새로 추가
          if (!newPages[currentPage]) {
            newPages[currentPage] = {
              pageId: currentPage,
              elements: [],
            };
          }

          // ✅ 순차적인 ID 설정 (현재 페이지의 요소 개수 기반)
          const newId = newPages[currentPage].elements.length;

          const newImage = {
            id: newId,
            type: "image",
            src: e.target.result,
            width: 150,
            height: 150,
            x: 50,
            y: 50,
          };

          newPages[currentPage] = {
            ...newPages[currentPage],
            elements: [...newPages[currentPage].elements, newImage],
          };

          return newPages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateTextStyle = (property, value) => {
    if (!selectedText) return;

    setPages((prev) => {
      const newPages = [...prev];
      newPages[currentPage] = newPages[currentPage].map((element) =>
        element.id === selectedText
          ? { ...element, [property]: value }
          : element
      );
      return newPages;
    });
  };

  return (
    <>
      {loading ? (
        <div>로딩 중...</div>
      ) : (
        <E.edit_container>
          <Toolbar
            addPage={addPage}
            deletePage={deletePage}
            selectedText={selectedText}
            addText={addText}
            addImage={addImage}
            updateTextStyle={updateTextStyle}
            savePage={savePage}
          />
          <Canvas
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPages={setPages}
            setSelectedText={setSelectedText}
            selectedText={selectedText}
          />
        </E.edit_container>
      )}
    </>
  );
}

export default BookDetail;
