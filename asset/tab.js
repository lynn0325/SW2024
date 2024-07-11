function openTab(evt, tab) {
	var i, tabcontent, tablinks, currentTab, maincontent, isCurrentActive;
	
	tabcontent = document.getElementsByClassName("content__inner"); // 인덱스 내부 본문에 해당하는 클래스 이름
	tablinks = document.getElementsByClassName("tab"); // 인덱스에 해당하는 클래스 이름
	currentTab = document.getElementById(tab); // 인덱스 내부 본문에 해당하는 아이디
	maincontent = document.querySelector(".main"); //메인 페이지 선택
    isCurrentActive = evt.currentTarget.classList.contains("active"); // 클릭된 탭에 active가 있었는가 확인
	
	for (i = 0; i < tabcontent.length; i++) { // 탭 내용 숨김
		tabcontent[i].style.display = "none"; 
	}

	for (i = 0; i < tablinks.length; i++) { //active 제거
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	if (isCurrentActive) { // 이미 활성화된 경우 -> 본문 내용 안보이게 하기
		currentTab.style.display = "none";
		maincontent.style.display = "block";
	} else {
		currentTab.style.display = "block"; // 본문 내용 보임
		evt.currentTarget.className += " active"; // active 클래스 추가
		maincontent.style.display = "none";
	}

}

// 가로 너비 800px 넘으면, 스크롤 기능 구현
if (window.innerWidth > 800) {
	const scrollContainer = document.querySelector(".tabs");

	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});
}