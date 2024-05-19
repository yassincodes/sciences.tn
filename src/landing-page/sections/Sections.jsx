import React from "react";
import "./Sections.css";

function Sections() {
  return (
    <>
      <h2 className="website-sections-header">
        يحتوي موقعنا على 5 أقسام مختلفة
      </h2>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                الدروس: إكتشف قائمة من الدروس المعدة بعناية
              </div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">إضغط للفتح</span>
                <span
                  className="ag-courses-item_date"
                  style={{ marginLeft: "5px" }}
                >
                  &#9664;
                </span>
              </div>
            </a>
          </div>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                الألعاب: إكتشف عالم العلوم عن طريق اللعب
              </div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">إضغط للفتح</span>
                <span
                  className="ag-courses-item_date"
                  style={{ marginLeft: "5px" }}
                >
                  &#9664;
                </span>
              </div>
            </a>
          </div>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                الفديوهات: إكتشف عالم العلوم عبر المشاهدة{" "}
              </div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">إضغط للفتح</span>
                <span
                  className="ag-courses-item_date"
                  style={{ marginLeft: "5px" }}
                >
                  &#9664;
                </span>
              </div>
            </a>
          </div>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
              تحدث مع أريج: الجواب سيأتيك عبر الذكاء الصناعي
              </div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date"> إبدأ المحادثة</span>
                <span
                  className="ag-courses-item_date"
                  style={{ marginLeft: "5px" }}
                >
                  &#9664;
                </span>
              </div>
            </a>
          </div>
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
              تحدث مع غفران: الجواب سيأتيك عبر الذكاء الصناعي
              </div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">إبدأ المحادثة </span>
                <span
                  className="ag-courses-item_date"
                  style={{ marginLeft: "5px" }}
                >
                  &#9664;
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;