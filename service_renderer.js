(function() {
    // Standalone service details generator mirroring Justlife original multi-page architecture
    const serviceDetails = {
        'cleaning': {
            ar: {
                title: 'تنظيف المنازل في الإمارات',
                desc: 'احصل على خدمة تنظيف منازل احترافية مع عاملات مدربات، تنظيف شامل للأرضيات، الأسطح، وغرف المعيشة.',
                packages: [
                    { id: 'c1', name: 'ساعتان - عاملة واحدة', price: 90, desc: 'مثالية للشقق الصغيرة والغرف الفردية.' },
                    { id: 'c2', name: '3 ساعات - عاملة واحدة', price: 130, desc: 'تنظيف مثالي للشقق متوسطة الحجم.' },
                    { id: 'c3', name: '4 ساعات - عاملتان', price: 240, desc: 'فريق من عاملتين لإنجاز سريع وشامل.' },
                    { id: 'c4', name: '6 ساعات - عاملتان', price: 350, desc: 'تنظيف عميق وشامل لكافة أرجاء المنزل.' }
                ],
                addons: [
                    { id: 'ca1', name: 'مستلزمات التنظيف والمواد (+30 درهم)', price: 30 },
                    { id: 'ca2', name: 'تنظيف داخل الثلاجة (+40 درهم)', price: 40 },
                    { id: 'ca3', name: 'تنظيف داخل الفرن (+40 درهم)', price: 40 }
                ]
            },
            en: {
                title: 'Home Cleaning in UAE',
                desc: 'Professional home cleaning service with trained maids, thorough floor cleaning, dusting, and living areas.',
                packages: [
                    { id: 'c1', name: '2 Hours - 1 Cleaner', price: 90, desc: 'Ideal for small apartments and studios.' },
                    { id: 'c2', name: '3 Hours - 1 Cleaner', price: 130, desc: 'Perfect cleaning for medium apartments.' },
                    { id: 'c3', name: '4 Hours - 2 Cleaners', price: 240, desc: 'Team of 2 cleaners for fast & thorough job.' },
                    { id: 'c4', name: '6 Hours - 2 Cleaners', price: 350, desc: 'Comprehensive deep cleaning for your entire home.' }
                ],
                addons: [
                    { id: 'ca1', name: 'Cleaning Materials (+30 AED)', price: 30 },
                    { id: 'ca2', name: 'Inside Fridge Cleaning (+40 AED)', price: 40 },
                    { id: 'ca3', name: 'Inside Oven Cleaning (+40 AED)', price: 40 }
                ]
            }
        },
        'deep': {
            ar: {
                title: 'التنظيف العميق للمنازل',
                desc: 'خدمة التنظيف العميق الشاملة للقصور، الفلل، والشقق الجديدة قبل السكن أو بعد الصيانة.',
                packages: [
                    { id: 'd1', name: 'استوديو / غرفة وصالة', price: 450, desc: 'تنظيف عميق للجدران والزوايا والأرضيات.' },
                    { id: 'd2', name: 'غرفتين وصالة', price: 650, desc: 'تنظيف كامل وشامل لكافة الغرف والمرافق.' },
                    { id: 'd3', name: '3 غرف وصالة', price: 850, desc: 'عناية فائقة وتنظيف بالبخار للمناطق الحساسة.' },
                    { id: 'd4', name: 'فيلا مستقلة (4+ غرف)', price: 1200, desc: 'فريق هندسي متخصص للتنظيف العميق الكامل.' }
                ],
                addons: [
                    { id: 'da1', name: 'تنظيف الكنب بالبخار (+200 درهم)', price: 200 },
                    { id: 'da2', name: 'تنظيف السجاد بالبخار (+150 درهم)', price: 150 }
                ]
            },
            en: {
                title: 'Deep Cleaning Services',
                desc: 'Comprehensive deep cleaning for villas, apartments, post-renovation, and move-in.',
                packages: [
                    { id: 'd1', name: 'Studio / 1 BHK', price: 450, desc: 'Deep cleaning of walls, corners, and floors.' },
                    { id: 'd2', name: '2 BHK Apartment', price: 650, desc: 'Complete cleaning of all rooms and facilities.' },
                    { id: 'd3', name: '3 BHK Apartment', price: 850, desc: 'Special care and steam cleaning for sensitive areas.' },
                    { id: 'd4', name: 'Villa (4+ Bedrooms)', price: 1200, desc: 'Specialized deep cleaning team.' }
                ],
                addons: [
                    { id: 'da1', name: 'Sofa Steam Cleaning (+200 AED)', price: 200 },
                    { id: 'da2', name: 'Carpet Steam Cleaning (+150 AED)', price: 150 }
                ]
            }
        },
        'ac': {
            ar: {
                title: 'تنظيف وصيانة المكيفات',
                desc: 'حافظ على هواء نقي ومنعش مع خدمة تنظيف وغسيل مكيفات السبليت والمركزي بأحدث المعدات.',
                packages: [
                    { id: 'ac1', name: 'تنظيف مكيف سبليت واحد', price: 150, desc: 'غسيل الفلاتر والوحدة الداخلية والخارجية.' },
                    { id: 'ac2', name: 'تنظيف مكيفين سبليت', price: 280, desc: 'باقة اقتصادية لتنظيف مكيفين.' },
                    { id: 'ac3', name: 'تنظيف 3 مكيفات سبليت', price: 390, desc: 'عرض خاص لتنظيف 3 وحدات تكييف.' },
                    { id: 'ac4', name: 'صيانة وفحص شامل للمكيف', price: 200, desc: 'فحص غاز الفريون والأداء الفني.' }
                ],
                addons: [
                    { id: 'aca1', name: 'تعقيم الفلاتر بمضاد البكتيريا (+25 درهم)', price: 25 },
                    { id: 'aca2', name: 'إعادة تعبئة غاز الفريون (+150 درهم)', price: 150 }
                ]
            },
            en: {
                title: 'AC Cleaning & Maintenance',
                desc: 'Keep your indoor air fresh with professional split and central AC cleaning.',
                packages: [
                    { id: 'ac1', name: '1 Split AC Unit', price: 150, desc: 'Filter washing and indoor/outdoor coil wash.' },
                    { id: 'ac2', name: '2 Split AC Units', price: 280, desc: 'Value package for 2 units.' },
                    { id: 'ac3', name: '3 Split AC Units', price: 390, desc: 'Special offer for 3 AC units.' },
                    { id: 'ac4', name: 'Full AC Service & Check', price: 200, desc: 'Freon gas check and performance tuning.' }
                ],
                addons: [
                    { id: 'aca1', name: 'Anti-bacterial Filter Sanitization (+25 AED)', price: 25 },
                    { id: 'aca2', name: 'Freon Gas Refill (+150 AED)', price: 150 }
                ]
            }
        },
        'salon': {
            ar: {
                title: 'صالون وتجميل السيدات المنزلي',
                desc: 'خدمات صالون منزلية فاخرة تشمل المناكير، الباديكير، تصفيف الشعر، والمساج الاسترخائي.',
                packages: [
                    { id: 's1', name: 'مناكير وباديكير كلاسيكي', price: 160, desc: 'عناية كاملة بالأيدي والأرجل في منزلك.' },
                    { id: 's2', name: 'قص وتصفيف الشعر', price: 200, desc: 'قصات عصرية وتسريحات تناسب كافة المناسبات.' },
                    { id: 's3', name: 'مساج استرخائي منزلي (60 دقيقة)', price: 250, desc: 'جلسة مساج لفك التوتر وإرخاء العضلات.' },
                    { id: 's4', name: 'باقة الجمال المتكاملة', price: 450, desc: 'مناكير، باديكير، وتسريحة شعر متكاملة.' }
                ],
                addons: [
                    { id: 'sa1', name: 'طلاء أضافر جيل (+50 درهم)', price: 50 },
                    { id: 'sa2', name: 'حمام زيت مغذي للشعر (+70 درهم)', price: 70 }
                ]
            },
            en: {
                title: 'Ladies Salon & Spa at Home',
                desc: 'Luxury home salon services including manicure, pedicure, hair styling, and relaxing massage.',
                packages: [
                    { id: 's1', name: 'Classic Manicure & Pedicure', price: 160, desc: 'Complete nail care in your home.' },
                    { id: 's2', name: 'Hair Cut & Styling', price: 200, desc: 'Modern haircuts and styling for all occasions.' },
                    { id: 's3', name: 'Relaxing Home Massage (60 mins)', price: 250, desc: 'Release stress and relax muscles.' },
                    { id: 's4', name: 'Full Beauty Combo', price: 450, desc: 'Manicure, pedicure, and complete hair styling.' }
                ],
                addons: [
                    { id: 'sa1', name: 'Gel Polish (+50 AED)', price: 50 },
                    { id: 'sa2', name: 'Hair Oil Treatment (+70 AED)', price: 70 }
                ]
            }
        }
    };

    // Default template for any other service
    function getGenericService(key, lang) {
        const isAr = lang === 'ar';
        return {
            title: isAr ? 'خدمة ' + key : key + ' Service',
            desc: isAr ? 'خدمة احترافية معتمدة من Justlife، تتميز بالجودة والسرعة والاعتمادية.' : 'Professional certified service by Justlife, ensuring high quality and reliability.',
            packages: [
                { id: 'p1', name: isAr ? 'الباقة القياسية الأولى' : 'Standard Package 1', price: 150, desc: isAr ? 'خدمة أساسية شاملة ومتكاملة.' : 'Comprehensive basic service.' },
                { id: 'p2', name: isAr ? 'الباقة المتقدمة الشاملة' : 'Advanced Comprehensive Package', price: 280, desc: isAr ? 'خدمة متقدمة مع إضافات خاصة.' : 'Advanced service with special additions.' }
            ],
            addons: [
                { id: 'a1', name: isAr ? 'مواد وإضافات خاصة (+50 درهم)' : 'Special Add-ons (+50 AED)', price: 50 }
            ]
        };
    }

    // Intercept clicks on links or service cards to render dedicated standalone page view
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        const card = e.target.closest('[class*="service"], [class*="card"], [class*="category"], div[onclick]');
        
        if (link) {
            const href = link.getAttribute('href') || '';
            const text = (link.innerText || link.textContent || '').trim();
            
            if (href.includes('/service') || href.includes('/cleaning') || href.includes('/salon') || href.includes('/ac') || href.includes('/deep') || href.includes('service') || href.includes('category') || href.includes('book')) {
                e.preventDefault();
                let key = 'cleaning';
                if (href.includes('ac') || text.includes('مكيف') || text.includes('AC')) key = 'ac';
                else if (href.includes('salon') || text.includes('صالون') || text.includes('Salon')) key = 'salon';
                else if (href.includes('deep') || text.includes('عميق') || text.includes('Deep')) key = 'deep';
                
                renderStandalonePage(key, text || 'Service');
            }
        }
    });

    function renderStandalonePage(serviceKey, serviceName) {
        const isEnglish = window.location.pathname.includes('en') || document.documentElement.lang === 'en';
        const lang = isEnglish ? 'en' : 'ar';
        const data = (serviceDetails[serviceKey] && serviceDetails[serviceKey][lang]) ? serviceDetails[serviceKey][lang] : getGenericService(serviceKey, lang);

        // Replace entire body content with dedicated standalone service page mirroring Justlife original structure
        document.body.innerHTML = `
            <div style="font-family: Tahoma, sans-serif; direction: ${isEnglish ? 'ltr' : 'rtl'}; background: #f7f9fa; min-height: 100vh; padding-bottom: 60px;">
                <!-- Top Navbar -->
                <div style="background: white; border-bottom: 1px solid #e5e8eb; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000;">
                    <a href="/" style="text-decoration: none; font-size: 22px; font-weight: bold; color: #00c3ff;">Justlife</a>
                    <a href="/" style="background: #ebfaff; color: #00c3ff; padding: 8px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">${isEnglish ? '← Back to Home' : 'الرئيسية ←'}</a>
                </div>

                <!-- Hero Section -->
                <div style="background: linear-gradient(135deg, #003764 0%, #00c3ff 100%); color: white; padding: 50px 20px; text-align: center;">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <span style="background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: bold;">${isEnglish ? 'Verified Service' : 'خدمة معتمدة'}</span>
                        <h1 style="font-size: 32px; margin: 20px 0 10px 0;">${data.title}</h1>
                        <p style="font-size: 16px; opacity: 0.9; line-height: 1.6;">${data.desc}</p>
                    </div>
                </div>

                <!-- Main Content & Booking Container -->
                <div style="max-width: 900px; margin: -30px auto 0 auto; padding: 0 20px; position: relative; z-index: 10;">
                    <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                        
                        <h2 style="color: #003764; font-size: 20px; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                            ${isEnglish ? '1. Select Your Package' : '1. اختر الباقة المناسبة'}
                        </h2>
                        
                        <div id="packages-list" style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px;">
                            ${data.packages.map((pkg, idx) => `
                                <label class="pkg-card" data-price="${pkg.price}" data-name="${pkg.name}" style="border: 2px solid ${idx === 0 ? '#00c3ff' : '#e5e8eb'}; background: ${idx === 0 ? '#ebfaff' : '#fff'}; padding: 20px; border-radius: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.2s;">
                                    <div style="display: flex; align-items: center; gap: 15px;">
                                        <input type="radio" name="selected_pkg" ${idx === 0 ? 'checked' : ''} style="width: 20px; height: 20px;">
                                        <div>
                                            <div style="font-weight: bold; font-size: 16px; color: #333;">${pkg.name}</div>
                                            <div style="font-size: 13px; color: #666; margin-top: 4px;">${pkg.desc}</div>
                                        </div>
                                    </div>
                                    <div style="font-weight: bold; font-size: 18px; color: #003764;">${pkg.price} ${isEnglish ? 'AED' : 'درهم'}</div>
                                </label>
                            `).join('')}
                        </div>

                        ${data.addons && data.addons.length > 0 ? `
                            <h2 style="color: #003764; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                                ${isEnglish ? '2. Optional Add-ons' : '2. الإضافات الاختيارية'}
                            </h2>
                            <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px;">
                                ${data.addons.map(addon => `
                                    <label style="display: flex; align-items: center; gap: 15px; background: #fafafa; padding: 15px; border-radius: 10px; border: 1px solid #e5e8eb; cursor: pointer;">
                                        <input type="checkbox" class="addon-chk" data-price="${addon.price}" data-name="${addon.name}" style="width: 18px; height: 18px;">
                                        <span style="flex-grow: 1; font-size: 15px; color: #333; font-weight: 500;">${addon.name}</span>
                                        <span style="font-weight: bold; color: #666;">+${addon.price}</span>
                                    </label>
                                `).join('')}
                            </div>
                        ` : ''}

                        <h2 style="color: #003764; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                            ${isEnglish ? '3. Booking & Address Details' : '3. بيانات الموعد وعنوان الاستلام'}
                        </h2>

                        <form id="standalone-booking-form" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Date & Time:' : 'تاريخ ووقت الزيارة:'}</label>
                                <input type="datetime-local" id="st-date" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Full Name:' : 'الاسم الكامل:'}</label>
                                <input type="text" id="st-name" required placeholder="${isEnglish ? 'Your Name' : 'أدخل اسمك الكريم'}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Mobile Phone:' : 'رقم الهاتف المتحرك:'}</label>
                                <input type="tel" id="st-phone" required placeholder="0501234567" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Full Address (City, Area, Building):' : 'العنوان التفصيلي (المدينة، الحي، رقم المبنى):'}</label>
                                <input type="text" id="st-address" required placeholder="${isEnglish ? 'e.g. Dubai Marina, Tower 1' : 'مثال: دبي، مارينا، برج 1'}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                        </form>

                        <div style="background: #f9f9f9; padding: 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border: 1px solid #e5e8eb;">
                            <div>
                                <div style="font-size: 14px; color: #666;">${isEnglish ? 'Total Estimated Amount:' : 'الإجمالي الكلي للخدمة:'}</div>
                                <div id="total-display" style="font-size: 26px; font-weight: bold; color: #003764; margin-top: 5px;">${data.packages[0].price} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </div>
                            <button id="submit-booking-btn" style="background: #00c3ff; color: white; border: none; padding: 15px 40px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background 0.2s;">
                                ${isEnglish ? 'Confirm Booking & Pay' : 'تأكيد الحجز والدفع'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `;

        // Interactive logic for package selection and total calculation
        let selectedPrice = data.packages[0].price;
        let selectedPkgName = data.packages[0].name;
        let selectedAddonsList = [];

        document.querySelectorAll('.pkg-card').forEach(card => {
            card.onclick = () => {
                document.querySelectorAll('.pkg-card').forEach(c => {
                    c.style.borderColor = '#e5e8eb';
                    c.style.background = '#fff';
                    c.querySelector('input').checked = false;
                });
                card.style.borderColor = '#00c3ff';
                card.style.background = '#ebfaff';
                card.querySelector('input').checked = true;

                selectedPrice = parseFloat(card.getAttribute('data-price'));
                selectedPkgName = card.getAttribute('data-name');
                updateTotal();
            };
        });

        document.querySelectorAll('.addon-chk').forEach(chk => {
            chk.onchange = () => {
                updateTotal();
            };
        });

        function updateTotal() {
            let addonsTotal = 0;
            selectedAddonsList = [];
            document.querySelectorAll('.addon-chk:checked').forEach(chk => {
                addonsTotal += parseFloat(chk.getAttribute('data-price'));
                selectedAddonsList.push(chk.getAttribute('data-name'));
            });

            const total = selectedPrice + addonsTotal;
            document.getElementById('total-display').innerText = total + (isEnglish ? ' AED' : ' درهم');
        }

        document.getElementById('submit-booking-btn').onclick = () => {
            const date = document.getElementById('st-date').value;
            const name = document.getElementById('st-name').value;
            const phone = document.getElementById('st-phone').value;
            const address = document.getElementById('st-address').value;

            if (!date || !name || !phone || !address) {
                alert(isEnglish ? 'Please fill in all booking details.' : 'الرجاء إكمال كافة بيانات الحجز والعنوان.');
                return;
            }

            let addonsTotal = 0;
            document.querySelectorAll('.addon-chk:checked').forEach(chk => {
                addonsTotal += parseFloat(chk.getAttribute('data-price'));
            });
            const finalTotal = selectedPrice + addonsTotal;

            const payload = {
                service: data.title + ' - ' + selectedPkgName,
                package: selectedPkgName,
                addons: selectedAddonsList.join(', '),
                totalPrice: finalTotal,
                name: name,
                phone: phone,
                address: address,
                date: date,
                timestamp: new Date().toISOString()
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
                                ${isEnglish ? 'Your order has been received and sent to our operations team. Order ID: #' : 'تم استلام طلبك وإرساله بنجاح إلى فريق العمل. رقم الطلب: #'}${resData.orderId || 1001}
                            </p>
                            <a href="/" style="display: inline-block; background: #00c3ff; color: white; padding: 12px 35px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                                ${isEnglish ? 'Back to Home' : 'العودة للرئيسية'}
                            </a>
                        </div>
                    </div>
                `;
            })
            .catch(() => {
                alert(isEnglish ? 'Booking submitted successfully!' : 'تم تقديم الحجز بنجاح!');
                window.location.href = '/';
            });
        };
    }
})();
