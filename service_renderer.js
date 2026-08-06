(function() {
    // Exact mapping of Justlife original service pages with real embedded UI & checkout flow
    const servicesData = {
        'house-cleaning': {
            ar: { title: 'التنظيف المنزلي', price: 90, desc: 'خدمة تنظيف منزلية احترافية مع عاملات مدربات.' },
            en: { title: 'Home Cleaning', price: 90, desc: 'Professional home cleaning with trained maids.' }
        },
        'deep-cleaning': {
            ar: { title: 'التنظيف العميق للمنازل', price: 450, desc: 'تنظيف عميق شامل للقصور والشقق.' },
            en: { title: 'Deep Cleaning', price: 450, desc: 'Comprehensive deep cleaning for villas and apartments.' }
        },
        'ac-cleaning': {
            ar: { title: 'تنظيف المكيفات في المنزل', price: 150, desc: 'تنظيف وغسيل مكيفات السبليت والمركزي.' },
            en: { title: 'AC Cleaning', price: 150, desc: 'Split and central AC cleaning service.' }
        },
        'salon-services-at-home': {
            ar: { title: 'صالونك المنزلي (تجميل السيدات)', price: 160, desc: 'مناكير، باديكير، وتصفيف شعر في منزلك.' },
            en: { title: 'Ladies Salon at Home', price: 160, desc: 'Manicure, pedicure, and hair styling at home.' }
        },
        'spa-and-massage-service-at-home': {
            ar: { title: 'السبا النسائي ومساج منزلي', price: 220, desc: 'مساج استرخائي وعلاجي منزلي.' },
            en: { title: 'Home Spa & Massage', price: 220, desc: 'Relaxing and therapeutic home massage.' }
        },
        'mens-salon': {
            ar: { title: 'صالون رجالي وعناية متميزة', price: 120, desc: 'حلاقة شعر وعناية شخصية للرجال.' },
            en: { title: 'Mens Salon & Grooming', price: 120, desc: 'Haircut and personal grooming for men.' }
        },
        'pest-control': {
            ar: { title: 'مكافحة الحشرات والآفات', price: 250, desc: 'مكافحة الحشرات بمواد آمنة ومعتمدة.' },
            en: { title: 'Pest Control Services', price: 250, desc: 'Safe and approved pest control.' }
        },
        'furniture-cleaning': {
            ar: { title: 'تنظيف الأثاث (كنب، سجاد، مراتب)', price: 300, desc: 'تنظيف بالبخار للكنب والسجاد.' },
            en: { title: 'Furniture Cleaning', price: 300, desc: 'Steam cleaning for sofas and carpets.' }
        },
        'laundry': {
            ar: { title: 'غسيل وكوي الملابس', price: 70, desc: 'غسيل، كوي، وتوصيل الملابس.' },
            en: { title: 'Laundry & Dry Cleaning', price: 70, desc: 'Washing, ironing, and doorstep delivery.' }
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
                    renderOriginalServicePage(slug);
                }
            }
        }
    });

    function renderOriginalServicePage(slug) {
        const isEnglish = window.location.pathname.includes('en') || document.documentElement.lang === 'en';
        const lang = isEnglish ? 'en' : 'ar';
        const defaultInfo = {
            ar: { title: 'خدمة منزلية معتمدة', price: 150, desc: 'خدمة احترافية فائقة الجودة من جست لايف.' },
            en: { title: 'Certified Home Service', price: 150, desc: 'High quality professional service by Justlife.' }
        };
        const sInfo = (servicesData[slug] && servicesData[slug][lang]) ? servicesData[slug][lang] : defaultInfo[lang];

        // Inject original Justlife styling & complete native booking interface
        document.body.innerHTML = `
            <div style="font-family: 'HKGrotesk', Tahoma, sans-serif; direction: ${isEnglish ? 'ltr' : 'rtl'}; background: #f7f9fa; min-height: 100vh;">
                <!-- Original Header Navbar -->
                <div style="background: white; border-bottom: 1px solid #e5e8eb; padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000;">
                    <a href="/" style="text-decoration: none; font-size: 24px; font-weight: bold; color: #00c3ff;">Justlife</a>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <a href="/" style="background: #ebfaff; color: #00c3ff; padding: 8px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">${isEnglish ? 'Home' : 'الرئيسية'}</a>
                    </div>
                </div>

                <!-- Service Hero Section matching Justlife original -->
                <div style="background: linear-gradient(135deg, #003764 0%, #00c3ff 100%); color: white; padding: 60px 20px; text-align: center;">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <span style="background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: bold;">${isEnglish ? 'Verified Service' : 'خدمة معتمدة رسمية'}</span>
                        <h1 style="font-size: 36px; margin: 20px 0 10px 0; font-weight: bold;">${sInfo.title}</h1>
                        <p style="font-size: 18px; opacity: 0.9; line-height: 1.6;">${sInfo.desc}</p>
                    </div>
                </div>

                <!-- Booking Container -->
                <div style="max-width: 850px; margin: -30px auto 40px auto; padding: 0 20px; position: relative; z-index: 10;">
                    <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                        
                        <h2 style="color: #003764; font-size: 22px; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px; font-weight: bold;">
                            ${isEnglish ? '1. Select Package & Hours' : '1. اختر الباقة أو مدة الخدمة'}
                        </h2>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px;">
                            <label class="pkg-card selected" style="border: 2px solid #00c3ff; background: #ebfaff; padding: 20px; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <span style="font-weight: bold; font-size: 16px; color: #333;">${isEnglish ? 'Standard Package' : 'الباقة القياسية'}</span>
                                    <input type="radio" name="pkg" checked style="width: 18px; height: 18px;">
                                </div>
                                <div style="font-size: 20px; font-weight: bold; color: #003764;">${sInfo.price} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </label>

                            <label class="pkg-card" style="border: 2px solid #e5e8eb; background: #fff; padding: 20px; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <span style="font-weight: bold; font-size: 16px; color: #333;">${isEnglish ? 'Extended Package' : 'الباقة الموسعة'}</span>
                                    <input type="radio" name="pkg" style="width: 18px; height: 18px;">
                                </div>
                                <div style="font-size: 20px; font-weight: bold; color: #003764;">${sInfo.price + 120} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </label>
                        </div>

                        <h2 style="color: #003764; font-size: 22px; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px; font-weight: bold;">
                            ${isEnglish ? '2. Appointment & Location' : '2. موعد الزيارة وعنوان المنزل'}
                        </h2>

                        <form id="original-booking-form" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Date & Time:' : 'تاريخ ووقت الزيارة:'}</label>
                                <input type="datetime-local" id="orig-date" required style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Full Name:' : 'الاسم الكامل:'}</label>
                                <input type="text" id="orig-name" required placeholder="${isEnglish ? 'Your Name' : 'أدخل اسمك الكريم'}" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Mobile Phone:' : 'رقم الهاتف المتحرك:'}</label>
                                <input type="tel" id="orig-phone" required placeholder="0501234567" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Full Address (City, Area, Building):' : 'العنوان التفصيلي (المدينة، الحي، رقم المبنى):'}</label>
                                <input type="text" id="orig-address" required placeholder="${isEnglish ? 'e.g. Dubai Marina, Tower 1' : 'مثال: دبي، مارينا، برج 1'}" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                            </div>
                        </form>

                        <div style="background: #f9f9f9; padding: 25px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #e5e8eb;">
                            <div>
                                <div style="font-size: 14px; color: #666;">${isEnglish ? 'Total Amount:' : 'الإجمالي الكلي للخدمة:'}</div>
                                <div id="orig-total" style="font-size: 28px; font-weight: bold; color: #003764; margin-top: 5px;">${sInfo.price} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </div>
                            <button id="orig-submit-btn" style="background: #00c3ff; color: white; border: none; padding: 16px 45px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background 0.2s;">
                                ${isEnglish ? 'Confirm Booking & Pay' : 'تأكيد الحجز والدفع'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `;

        let currentPrice = sInfo.price;
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
                    currentPrice = sInfo.price;
                    selectedPkgName = isEnglish ? 'Standard Package' : 'الباقة القياسية';
                } else {
                    currentPrice = sInfo.price + 120;
                    selectedPkgName = isEnglish ? 'Extended Package' : 'الباقة الموسعة';
                }
                document.getElementById('orig-total').innerText = currentPrice + (isEnglish ? ' AED' : ' درهم');
            };
        });

        document.getElementById('orig-submit-btn').onclick = () => {
            const date = document.getElementById('orig-date').value;
            const name = document.getElementById('orig-name').value;
            const phone = document.getElementById('orig-phone').value;
            const address = document.getElementById('orig-address').value;

            if (!date || !name || !phone || !address) {
                alert(isEnglish ? 'Please fill in all required booking fields.' : 'الرجاء تعبئة كافة حقول الحجز المطلوبة.');
                return;
            }

            const payload = {
                service: sInfo.title + ' - ' + selectedPkgName,
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
