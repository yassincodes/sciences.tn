import "./Pfe.css";

function Pfe() {
  return (
    <div>
      <h2 className="pfe-header">موقعنا هو خلاصة لمشروع التخرج الذي قمنا به</h2>
      <div className="cover">
        <div className="book">
          <label htmlFor="page-1" className="book__page book__page--1">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg"
              alt=""
            />
          </label>

          <label htmlFor="page-2" className="book__page book__page--4">
            <div className="page__content">
              <h1 className="page__content-title">مقدمة البحث</h1>
              <div className="page__content-blockquote">
                <p className="page__content-blockquote-text">
                  نحن نعيش الآن في عالم يطلق عليه عالم انفجار المعلومات، عالم
                  ينفعل بالمعلومة، ويتفاعل معها وإذا كنا نتحدث في السابق عن
                  صناعة الطرق والسيارات، أصبحنا اليوم نتحدث عن صناعة المعرفة.
                  فالمعلومات التي تم إنشاؤها في سنتي 2016 و2017 فقط. تعادل 90%
                  من كل المعلومات التي تم إنشاؤها في السنوات والقرون السابقة .
                  سنتجنب الحديث عما وقع إنشاؤه من معرفة في السنوات الحالية، لأن
                  الهوة آخذة في الاتساع بشكل لا يصدق.
                </p>
                <p className="page__content-blockquote-text">
                  البحث عن أساليب أخرى للتعليم أصبح ضرورة حتمية اليوم، كيف لا
                  والمعرفة أصبحت متاحة في كل مكان، وأصبح السؤال الذي يشغل بال
                  التلميذ اليوم هو: "لماذا أذهب للمدرسة إذا كانت المعرفة بعيدة
                  عني بضع خطوات؟". كما وأصبح طموح التلاميذ اليوم، عوض أن يصبحوا
                  مهندسين، أو محامين أو أطباء، أن يصبحوا عاملين على شبكة
                  الإنترنت! في الحقيقة، أفادت دراسة أجريت سنة 2017 نشرتها مجلة
                  الديلي ميل البريطانية، إلى أن أكثر من 75% من الأطفال في
                  الولايات المتحدة الأمريكية يرغبون في العمل كصناع محتوى ومؤثرين
                  على مواقع التواصل الاجتماعي عندما يكبرون!
                </p>
                <p className="page__content-blockquote-text">
                  كل هذا يقودنا لطريق من إثنين: إما أن نواصل تجاهل ما يحصل في
                  العالم، نواصل التعليم التقليدي، نواصل إجبار أطفالنا أن يبتعدوا
                  عن هواتفهم، أن يتخلوا عن هذا الجهاز الذي "يشتتهم عن دراستهم"
                  كما اعتدنا أن نقول لهم دوما. أو أن نختار الوقوف كمعلمين ومربين
                  إلى جانب التقدم الذي يحصل في العالم، مثلما اخترنا يوما استعمال
                  البريد الإلكتروني على البريد العادي، أو استعمال برمجيات office
                  على استعمال الأوراق والأقلام الجافة!
                </p>
              </div>
              <div className="page__content-text">
                <p>....</p>
              </div>
              <div className="page__number">3</div>
            </div>
          </label>

          <input type="radio" name="page" id="page-1" />
          <input type="radio" name="page" id="page-2" />

          <label htmlFor="page-2" className="book__page book__page--2">
            <div className="book__page-front">
              <div className="page__content">
                <h1 className="page__content-book-title">
                  إستخدام التكنولوجيا والألعاب في تدرس مادة العلوم
                </h1>
                <h2 style={{ visibility: "hidden" }}>.</h2>
                <p className="page__content-credits">
                  عمل للمعلمتان{" "}
                  <span>
                    أريج
                    <br />
                    غفران
                  </span>
                </p>
                <p className="page__content-credits">
                  تأطير الدكتور <span>إسم البروف</span>
                </p>
              </div>
            </div>
            <div className="book__page-back">
              <div className="page__content">
                <h1 className="page__content-title">عناصر البحث </h1>
                <table className="page__content-table">
                  <tr>
                    <td align="left">3</td>
                    <td align="right">تمهيد</td>
                    <td align="right">I الجزء</td>
                  </tr>
                  <tr>
                    <td align="left">43</td>
                    <td align="right">توضيف بيداغوجيا اللعب في التدريس</td>
                    <td align="right">II الجزء</td>
                  </tr>
                  <tr>
                    <td align="left">87</td>
                    <td align="right">توظيف بيداغوجيا اللعب في التدريس</td>
                    <td align="right">III الجزء</td>
                  </tr>
                  <tr>
                    <td align="left">147</td>
                    <td align="right">توظيف الرقمنة في التدريس</td>
                    <td align="right">IV الجزء</td>
                  </tr>
                </table>
                <div className="page__number">2</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Pfe;