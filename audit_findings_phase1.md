# نتائج المقارنة الأولية — 2026-08-06

## المصدر الأصلي
- الصفحة الرئيسية الأصلية: https://www.justlife.com/en-AE
- تحتوي على header ثابت، hero، شبكة الخدمات الرئيسية، قسم الأسباب الأربعة، ثم قسم أزرق بعنوان: The Justlife Promise – Excellence in Every Home، ثم قسم تنزيل التطبيق، ثم Service Areas وFooter.
- القسم الأزرق ظاهر فعليًا بلون سماوي/أزرق قوي، ويتضمن شعار التأمين/درعًا أبيض وعنوانًا ونصًا أبيض.
- الصفحة الأصلية تُظهر أيضًا شريط موافقة ملفات الارتباط أسفل الشاشة.

## نسخة Railway
- الصفحة الرئيسية: https://justlife-ea.up.railway.app/
- HTML يحتوي على الأصول المحلية والمسارات نفسها تقريبًا.
- بعد آخر نشر، فحص DOM أكد: data-homepage-stability موجود، الشعار ظاهر، 33/33 صورة محمّلة، والقسم insurance-section لونه rgb(0,174,239) بعد التمرير.
- رغم ذلك، المستخدم أفاد أن العناصر تختفي بصريًا وأن المطابقة ليست كاملة؛ لذلك يلزم اختبار بصري متكرر ومقارنة CSS/DOM وليس الاكتفاء بـ HTTP 200.

## ملاحظة جوهرية
- الصفحة الأصلية تعرض القسم الأزرق مباشرة قبل تنزيل التطبيق، بينما النسخة السابقة كانت تعرضه شفافًا/أبيض؛ تم إصلاح اللون في آخر commit، لكن بقية الفروقات المرئية وتسلسل صفحات الخدمة لم تُراجع بعد قسمًا قسمًا.

## الخدمات الرئيسية في الصفحة الأصلية
Home Cleaning, PCR at Home, Women’s Salon, Women’s Spa, Furniture Cleaning, A/C Cleaning, Premium Men’s Grooming, Lab at Home, Pest Control, Disinfection.

## روابط نسخة Railway التي يجب مراجعتها
/en-AE/house-cleaning
/en-AE/pcr-at-home
/en-AE/salon-services-at-home
/en-AE/spa-and-massage-service-at-home
/en-AE/furniture-cleaning
/en-AE/ac-cleaning
/en-AE/mens-salon
/en-AE/lab-tests-at-home
/en-AE/pest-control
/en-AE/disinfection-service

## مصادر المقارنة
[1]: https://www.justlife.com/en-AE
[2]: https://justlife-ea.up.railway.app/
[3]: https://justlife-ea.up.railway.app/en-AE/house-cleaning/checkout/details

## الخطوة التالية
استخراج CSS/DOM من صفحات أصلية متعددة ومقابلها Railway، ثم إنشاء جدول فروقات لكل قسم ومسار قبل إجراء إصلاح جديد.

## صفحة House Cleaning الأصلية
- الرابط: https://www.justlife.com/en-AE/house-cleaning
- زر Book Now يذهب إلى: https://www.justlife.com/en-AE/home-cleaning/checkout/details (وليس house-cleaning/checkout/details).
- الصفحة الأصلية تحتوي على header، breadcrumb، hero بصورة مدينة، زر Book Now، نصوص تعريفية، عناوين وأقسام تفصيلية لخدمات التنظيف، وروابط لخدمات فرعية ومقالات، ثم footer.
- هذا يكشف فرقًا مهمًا في نسخة Railway: مسار checkout المستخدم سابقًا `/en-AE/house-cleaning/checkout/details` ليس المسار الأصلي الدقيق، ويجب دعم/إعادة توجيه المسار الصحيح `/en-AE/home-cleaning/checkout/details` مع الحفاظ على صفحة الخدمة الكاملة.

## نتيجة السحب الشامل
- عدد ملفات HTML المحلية: 647.
- عدد صفحات checkout المحلية: 64.
- عدد الأصول داخل assets-local بعد الجولة الشاملة: 1,371.
- أداة التوطين عالجت 871 ملفًا نصيًا وبدّلت أكثر من 2.98 مليون مرجع نصي بسبب تكرار الأصول في الصفحات.
- بعد استبعاد manifest وسجل الفشل وملفات أدوات السحب، لم تعد صفحات HTML تحتوي على روابط مباشرة إلى justlife.com أو cloudfront.net أو storyblok.com؛ نتيجة page_refs = 0.
- بقيت بعض سجلات الفشل التاريخية وروابط خارجية عامة غير first-party، مثل روابط متاجر التطبيقات والشبكات الاجتماعية، وهي ليست اعتماديات لعرض الموقع.

## اكتمال صفحات checkout

تمت مراجعة روابط checkout من صفحات الأقسام المحلية وتنزيل الصفحات الناقصة من المسارات الرسمية بصيغة مستقلة. أضيفت 39 صفحة checkout ناقصة من المصدر `https://www.justlife.com/{lang}/{slug}/checkout/{step}`، وأصبح عدد ملفات checkout المحلية 103 ملفًا، مع حفظها داخل `mirrored-checkouts/{lang}/{slug}/checkout/`.

المسارات المضافة تشمل ac-cleaning وac-cleaning-at-home وat-home-nurse-care وbeauty-for-her وbody-adjustment وdeep-cleaning-ae وdoctor-at-home وflu-vaccine-at-home وhandyman-and-maintenance وhome-cleaning وiv-therapy-at-home وlab-tests-at-home وlaundry-and-dry-cleaning وmens-spa وonline-therapy-flex وpcr-at-home وpersonal-trainer وpest-control وpet-grooming وphysiotherapy-at-home وpremium-grooming وspa-treatments، باللغات التي كانت صفحات الأقسام تشير إليها.

## مقارنة مباشرة مع الصفحات الأصلية — 2026-08-07

استخراج الصفحات الأصلية أكد أن الصفحة الرئيسية تحتوي على hero، شبكة الخدمات، قسم الأسباب الأربعة، قسم Promise الأزرق، ثم تنزيل التطبيق والتذييل. صفحة `house-cleaning` تستخدم زر Book Now إلى `/en-AE/home-cleaning/checkout/details`، بينما صفحة `salon-services-at-home` تستخدم `/en-AE/beauty-for-her/checkout/flex`، وصفحة `doctor-on-call` تستخدم `/en-AE/doctor-at-home/checkout/flex`. هذه المسارات يجب أن تبقى محلية في Free Way، ولا يكفي دعم slug صفحة المحتوى فقط.

المقارنة النصية تؤكد كذلك أن صفحات الخدمات الأصلية ليست شاشة حجز عامة؛ فهي تحتوي على header وbreadcrumb وhero وصورة وخطاب تفصيلي وأقسام فرعية وروابط خدمات ومناطق خدمة وتنزيل التطبيق والتذييل. لذلك معيار التدقيق هو وجود صفحة المحتوى الكاملة + مسار checkout الخاص بالخدمة، وليس مجرد استجابة HTTP 200.

المصادر: https://www.justlife.com/en-AE، https://www.justlife.com/en-AE/house-cleaning، https://www.justlife.com/en-AE/salon-services-at-home، https://www.justlife.com/en-AE/doctor-on-call.

## مصفوفة تحقق Railway بعد الرفع — 2026-08-07

جميع المسارات التالية أعادت HTTP 200 من `https://justlife-ea.up.railway.app` بعد آخر رفع إلى GitHub. صفحات الأقسام أعادت HTML كاملًا بعناوينها الأصلية، وصفحات checkout أعادت HTML محليًا بحجم يقارب 176 KB.

| القسم | رابط Railway | النتيجة |
|---|---|---|
| Home Cleaning | https://justlife-ea.up.railway.app/en-AE/house-cleaning | 200 |
| PCR at Home | https://justlife-ea.up.railway.app/en-AE/pcr-at-home | 200 |
| Women’s Salon | https://justlife-ea.up.railway.app/en-AE/salon-services-at-home | 200 |
| Women’s Spa | https://justlife-ea.up.railway.app/en-AE/spa-and-massage-service-at-home | 200 |
| Furniture Cleaning | https://justlife-ea.up.railway.app/en-AE/furniture-cleaning | 200 |
| A/C Cleaning | https://justlife-ea.up.railway.app/en-AE/ac-cleaning | 200 |
| Premium Men’s Grooming | https://justlife-ea.up.railway.app/en-AE/mens-salon | 200 |
| Lab at Home | https://justlife-ea.up.railway.app/en-AE/lab-tests-at-home | 200 |
| Pest Control | https://justlife-ea.up.railway.app/en-AE/pest-control | 200 |
| Disinfection | https://justlife-ea.up.railway.app/en-AE/disinfection-service | 200 |
| Home Cleaning checkout | https://justlife-ea.up.railway.app/en-AE/home-cleaning/checkout/details | 200 |
| Beauty for Her checkout | https://justlife-ea.up.railway.app/en-AE/beauty-for-her/checkout/flex | 200 |
| Doctor at Home checkout | https://justlife-ea.up.railway.app/en-AE/doctor-at-home/checkout/flex | 200 |
| PCR checkout | https://justlife-ea.up.railway.app/en-AE/pcr-at-home/checkout/flex | 200 |
| Furniture Cleaning checkout | https://justlife-ea.up.railway.app/en-AE/furniture-cleaning/checkout/flex | 200 |
| A/C checkout | https://justlife-ea.up.railway.app/en-AE/ac-cleaning-at-home/checkout/flex | 200 |
| Premium Grooming checkout | https://justlife-ea.up.railway.app/en-AE/premium-grooming/checkout/flex | 200 |
| Lab Tests checkout | https://justlife-ea.up.railway.app/en-AE/lab-tests-at-home/checkout/flex | 200 |
| Pest Control checkout | https://justlife-ea.up.railway.app/en-AE/pest-control/checkout/flex | 200 |
| Disinfection checkout | https://justlife-ea.up.railway.app/en-AE/disinfection/checkout/flex | 200 |

ملاحظة المطابقة: تحقق HTTP ووجود HTML لا يثبت تطابقًا بصريًا حرفيًا لكل بكسل. ما ثبت هنا هو أن أقسام الصفحة الرئيسية ومسارات الصفحات والـ checkout المقابلة تعمل، وأن الصفحة الرئيسية تستخدم أصولًا محلية ومسارات محلية. توجد فروقات تقنية مقصودة في العنوان والهوية واسم النطاق لأن النسخة منشورة كـ Free Way على Railway، وليست الموقع الأصلي نفسه.
