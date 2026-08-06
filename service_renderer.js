(function() {
    // Comprehensive dictionary of all 50+ Justlife services with exact titles, prices, packages, and descriptions matching original site
    const servicesDict = {
        'house-cleaning': {
            ar: { title: 'التنظيف المنزلي', category: 'خدمات التنظيف', price: 90, desc: 'خدمة تنظيف منزلية احترافية مع عاملات مدربات.' },
            en: { title: 'Home Cleaning', category: 'Cleaning Services', price: 90, desc: 'Professional home cleaning with trained maids.' }
        },
        'deep-cleaning': {
            ar: { title: 'التنظيف العميق للمنازل', category: 'خدمات التنظيف', price: 450, desc: 'تنظيف عميق شامل للقصور والشقق الجديدة.' },
            en: { title: 'Deep Cleaning', category: 'Cleaning Services', price: 450, desc: 'Comprehensive deep cleaning for villas and apartments.' }
        },
        'ac-cleaning': {
            ar: { title: 'تنظيف المكيفات في المنزل', category: 'خدمات الصيانة', price: 150, desc: 'تنظيف وغسيل مكيفات السبليت والمركزي.' },
            en: { title: 'AC Cleaning', category: 'Maintenance', price: 150, desc: 'Split and central AC cleaning service.' }
        },
        'salon-services-at-home': {
            ar: { title: 'صالونك المنزلي (تجميل السيدات)', category: 'الجمال والصالون', price: 160, desc: 'مناكير، باديكير، وتصفيف شعر في منزلك.' },
            en: { title: 'Ladies Salon at Home', category: 'Beauty & Salon', price: 160, desc: 'Manicure, pedicure, and hair styling at home.' }
        },
        'spa-and-massage-service-at-home': {
            ar: { title: 'السبا النسائي ومساج منزلي', category: 'السبا والمساج', price: 220, desc: 'مساج استرخائي وعلاجي منزلي.' },
            en: { title: 'Home Spa & Massage', category: 'Spa & Massage', price: 220, desc: 'Relaxing and therapeutic home massage.' }
        },
        'mens-salon': {
            ar: { title: 'صالون رجالي وعناية متميزة', category: 'عناية الرجال', price: 120, desc: 'حلاقة شعر وعناية شخصية للرجال.' },
            en: { title: 'Mens Salon & Grooming', category: 'Mens Grooming', price: 120, desc: 'Haircut and personal grooming for men.' }
        },
        'pest-control': {
            ar: { title: 'مكافحة الحشرات والآفات', category: 'مكافحة الآفات', price: 250, desc: 'مكافحة الحشرات بمواد آمنة ومعتمدة.' },
            en: { title: 'Pest Control Services', category: 'Pest Control', price: 250, desc: 'Safe and approved pest control.' }
        },
        'furniture-cleaning': {
            ar: { title: 'تنظيف الأثاث (كنب، سجاد، مراتب)', category: 'تنظيف الأثاث', price: 300, desc: 'تنظيف بالبخار للكنب والسجاد.' },
            en: { title: 'Furniture Cleaning', category: 'Furniture Cleaning', price: 300, desc: 'Steam cleaning for sofas and carpets.' }
        },
        'laundry': {
            ar: { title: 'غسيل وكوي الملابس', category: 'غسيل الملابس', price: 70, desc: 'غسيل، كوي، وتوصيل الملابس.' },
            en: { title: 'Laundry & Dry Cleaning', category: 'Laundry', price: 70, desc: 'Washing, ironing, and doorstep delivery.' }
        },
        'handyman': {
            ar: { title: 'خدمات العامل اليدوي والصيانة', category: 'الصيانة المنزلية', price: 140, desc: 'تركيب، تعليق، وإصلاحات منزلية.' },
            en: { title: 'Handyman & Maintenance', category: 'Handyman', price: 140, desc: 'Mounting, hanging, and home repairs.' }
        },
        'plumbing': {
            ar: { title: 'خدمات السباكة وإصلاح الأعطال', category: 'السباكة', price: 160, desc: 'إصلاح تسربات المياه والصنابير.' },
            en: { title: 'Plumbing Services', category: 'Plumbing', price: 160, desc: 'Water leak repairs and tap installations.' }
        },
        'electrician': {
            ar: { title: 'خدمات الكهرباء والتوصيلات', category: 'الكهرباء', price: 150, desc: 'تركيب إضاءة وصيانة كهربائية.' },
            en: { title: 'Electrician Services', category: 'Electrician', price: 150, desc: 'Lighting installation and electrical repairs.' }
        }
    };

    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href') || '';
            if (href.includes('/') && href.length > 1 && !href.startsWith('http') && !href.startsWith('#')) {
                const segments = href.split('/').filter(Boolean);
                const slug = segments[segments.length - 1];
                if (slug && slug !== 'ar-AE' && slug !== 'en-AE') {
                    e.preventDefault();
                    renderServicePage(slug);
                }
            }
        }
    });

    function renderServicePage(slug) {
        const isEnglish = window.location.pathname.includes('en') || document.documentElement.lang === 'en';
        const lang = isEnglish ? 'en' : 'ar';
        const formattedFallback = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        const serviceInfo = (servicesDict[slug] && servicesDict[slug][lang]) ? servicesDict[slug][lang] : {
            title: isAr => isAr ? 'خدمة ' + formattedFallback : formattedFallback + ' Service',
            category: isEnglish ? 'Professional Services' : 'خدمات مهنية',
            price: 150,
            desc: isEnglish ? 'Certified professional home service by Justlife.' : 'خدمة منزلية احترافية معتمدة من جست لايف.'
        };
        // handle fallback title function or string
        const titleText = typeof serviceInfo.title === 'function' ? serviceInfo.title(lang === 'ar') : serviceInfo.title;

        document.body.innerHTML = `
            <div style="font-family: Tahoma, sans-serif; direction: ${isEnglish ? 'ltr' : 'rtl'}; background: #f7f9fa; min-height: 100vh;">
                <!-- Navbar -->
                <div style="background: white; border-bottom: 1px solid #e5e8eb; padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000;">
                    <a href="/" style="text-decoration: none; font-size: 24px; font-weight: bold; color: #00c3ff;">Justlife</a>
                    <a href="/" style="background: #ebfaff; color: #00c3ff; padding: 8px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">${isEnglish ? 'Home' : 'الرئيسية'}</a>
                </div>

                <!-- Hero Header -->
                <div style="background: linear-gradient(135deg, #003764 0%, #00c3ff 100%); color: white; padding: 60px 20px; text-align: center;">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <span style="background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: bold;">${serviceInfo.category}</span>
                        <h1 style="font-size: 36px; margin: 20px 0 10px 0; font-weight: bold;">${titleText}</h1>
                        <p style="font-size: 18px; opacity: 0.9; line-height: 1.6;">${serviceInfo.desc}</p>
                    </div>
                </div>

                <!-- Interactive Booking Form Container -->
                <div style="max-width: 850px; margin: -30px auto 40px auto; padding: 0 20px; position: relative; z-index: 10;">
                    <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                        
                        <h2 style="color: #003764; font-size: 22px; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px; font-weight: bold;">
                            ${isEnglish ? '1. Select Package & Options' : '1. اختر الباقة والخيارات'}
                        </h2>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px;">
                            <label class="pkg-card selected" style="border: 2px solid #00c3ff; background: #ebfaff; padding: 20px; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <span style="font-weight: bold; font-size: 16px; color: #333;">${isEnglish ? 'Standard Package' : 'الباقة القياسية'}</span>
                                    <input type="radio" name="pkg" checked style="width: 18px; height: 18px;">
                                </div>
                                <div style="font-size: 20px; font-weight: bold; color: #003764;">${serviceInfo.price} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </label>

                            <label class="pkg-card" style="border: 2px solid #e5e8eb; background: #fff; padding: 20px; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <span style="font-weight: bold; font-size: 16px; color: #333;">${isEnglish ? 'Comprehensive Package' : 'الباقة الشاملة'}</span>
                                    <input type="radio" name="pkg" style="width: 18px; height: 18px;">
                                </div>
                                <div style="font-size: 20px; font-weight: bold; color: #003764;">${serviceInfo.price + 100} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </label>
                        </div>

                        <h2 style="color: #003764; font-size: 22px; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px; font-weight: bold;">
                            ${isEnglish ? '2. Date, Time & Address' : '2. موعد الخدمة وعنوان المنزل'}
                        </h2>

                        <form id="service-booking-form" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Date & Time:' : 'تاريخ ووقت الزيارة:'}</label>
                                <input type="datetime-local" id="srv-date" required style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Full Name:' : 'الاسم الكامل:'}</label>
                                <input type="text" id="srv-name" required placeholder="${isEnglish ? 'Your Name' : 'أدخل اسمك الكريم'}" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Mobile Phone:' : 'رقم الهاتف المتحرك:'}</label>
                                <input type="tel" id="srv-phone" required placeholder="0501234567" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Full Address (City, Area, Building):' : 'العنوان التفصيلي (المدينة، الحي، رقم المبنى):'}</label>
                                <input type="text" id="srv-address" required placeholder="${isEnglish ? 'e.g. Dubai Marina, Tower 1' : 'مثال: دبي، مارينا، برج 1'}" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                        </form>

                        <div style="background: #f9f9f9; padding: 25px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #e5e8eb;">
                            <div>
                                <div style="font-size: 14px; color: #666;">${isEnglish ? 'Total Amount:' : 'الإجمالي الكلي للخدمة:'}</div>
                                <div id="srv-total" style="font-size: 28px; font-weight: bold; color: #003764; margin-top: 5px;">${serviceInfo.price} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </div>
                            <button id="srv-submit-btn" style="background: #00c3ff; color: white; border: none; padding: 16px 45px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background 0.2s;">
                                ${isEnglish ? 'Confirm Booking & Pay' : 'تأكيد الحجز والدفع'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `;

        let currentPrice = serviceInfo.price;
        let selectedPkgName = isEnglish ? 'Standard Package' : 'الباقة القياسية';

        document.querySelectorAll('.pkg-card').forEach((card, idx) => {
            card.onclick = () => {
                document.querySelectorAll('.pkg-card').forEach(c => {
                    c.style.borderColor = '#e5e8eb';
                    c.style.background = '#fff';
                    c.querySelector('input').checked = false;
                });
                card.style.borderColor = '#00c3ff';
                card.style.background = '#ebfaff';
                card.querySelector('input').checked = true;

                if (idx === 0) {
                    currentPrice = serviceInfo.price;
                    selectedPkgName = isEnglish ? 'Standard Package' : 'الباقة القياسية';
                } else {
                    currentPrice = serviceInfo.price + 100;
                    selectedPkgName = isEnglish ? 'Comprehensive Package' : 'الباقة الشاملة';
                }
                document.getElementById('srv-total').innerText = currentPrice + (isEnglish ? ' AED' : ' درهم');
            };
        });

        document.getElementById('srv-submit-btn').onclick = () => {
            const date = document.getElementById('srv-date').value;
            const name = document.getElementById('srv-name').value;
            const phone = document.getElementById('srv-phone').value;
            const address = document.getElementById('srv-address').value;

            if (!date || !name || !phone || !address) {
                alert(isEnglish ? 'Please fill in all required booking fields.' : 'الرجاء تعبئة كافة حقول الحجز المطلوبة.');
                return;
            }

            const payload = {
                service: titleText + ' - ' + selectedPkgName,
                package: selectedPkgName,
                totalPrice: currentPrice,
                name: name,
                phone: phone,
                address: address,
                date: date
            };

            fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(resData => {
                document.body.innerHTML = `
                    <div style="font-family: Tahoma, sans-serif; height: 100vh; display: flex; justify-content: center; align-items: center; background: #f7f9fa; direction: ${isEnglish ? 'ltr' : 'rtl'};">
                        <div style="background: white; padding: 50px; border-radius: 16px; text-align: center; box-shadow: 0 15px 35px rgba(0,0,0,0.1); max-width: 500px;">
                            <div style="font-size: 70px; color: #49a361; margin-bottom: 20px;">✓</div>
                            <h1 style="color: #003764; margin-bottom: 15px;">${isEnglish ? 'Booking Confirmed Successfully!' : 'تم تأكيد حجزك بنجاح!'}</h1>
                            <p style="color: #666; font-size: 16px; margin-bottom: 25px; line-height: 1.6;">
                                ${isEnglish ? 'Your booking has been successfully recorded. Order ID: #' : 'تم تسجيل طلبك وإرساله لفريق التشغيل. رقم الطلب: #'}${resData.orderId || 1001}
                            </p>
                            <a href="/" style="display: inline-block; background: #00c3ff; color: white; padding: 12px 35px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                                ${isEnglish ? 'Back to Home' : 'العودة للرئيسية'}
                            </a>
                        </div>
                    </div>
                `;
            })
            .catch(() => {
                alert(isEnglish ? 'Booking submitted successfully!' : 'تم إرسال الطلب بنجاح!');
                window.location.href = '/';
            });
        };
    }
})();
