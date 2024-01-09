document.addEventListener('DOMContentLoaded', () => {
    // すべてのトグルボタンにイベントリスナーを設定する
    let observe;

    document.querySelectorAll('.toggle-button').forEach((button) => {
        // 元のテキストをdata属性に格納する
        button.addEventListener('click',  (event) => {
            let content = button.nextElementSibling;
            let isClosed = content.style.maxHeight && content.style.maxHeight !== '0px';

            if (!observe) {
                observe = new MutationObserver(() => {
                    setTimeout(() => {
                        content.style.maxHeight =  `${content.scrollHeight}px`;
                    }, 500);
                });
            }

            if (isClosed) {
                observe.takeRecords();
                observe.disconnect();
            } else {
                observe.observe(content, {attributes: true, attributeFilter: ["style"]});
            }

            // 高さを切り替える
            content.style.maxHeight = isClosed ? null : `${content.scrollHeight}px`;

            // ボタンのテキストを切り替える
            button.textContent = isClosed ? `▶ ${button.getAttribute('data-toggle-text')} を表示する`: `▼ ${button.getAttribute('data-toggle-text')} を閉じる`;
        });
    });


    let logo = document.getElementById("logo");
    let cha = document.getElementById("cha");

    let logo_next = document.getElementById("logo_next");
    let logo_prev = document.getElementById("logo_prev");
    let cha_next = document.getElementById("cha_next");
    let cha_prev = document.getElementById("cha_prev");

    let m_img = ["../image/mouse_1.jpg", "../image/mouse_2.jpg"];
    let c_img = ["../image/cha_1.jpg",  "../image/cha_2.jpg"];

    function change_image(element, img_src, c) {
	    let count = parseInt(element.getAttribute("data-count")) || 0;
	    count = ((count + c % img_src.length) + img_src.length) % img_src.length;
	    element.src = img_src[count];
	    element.setAttribute("data-count", count);
    }

    logo_next.addEventListener("click", () => {
	change_image(logo, m_img, 1);
    });

    logo_prev.addEventListener("click", () => {
	change_image(logo, m_img, -1);
    });

    cha_next.addEventListener("click", () => {
	change_image(cha, c_img, 1);
    });

    cha_prev.addEventListener("click", () => {
	change_image(cha, c_img, -1);
    });
});

/*
function imagechange1() {
    document.getElementById('logo').src = "../image/mouse_2.jpg";
}
function imagechange2() {
    document.getElementById('logo').src = "../image/mouse_1.jpg";
}
function imagechange3() {
    document.getElementById('cha').src = "../image/cha_2.jpg";
}
function imagechange4() {
    document.getElementById('cha').src = "../image/cha_1.jpg";
}
*/
