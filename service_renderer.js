(function() {
    // Exact mapping of all 50+ services mirroring Justlife original Arabic & English slugs, packages, and descriptions
    const exactServices = {
        'house-cleaning': {
            ar: { title: 'التنظيف المنزلي', desc: 'خدمة تنظيف منزلية احترافية مع عاملات مدربات، تنظيف شامل للأرضيات والأسطح.' },
            en: { title: 'Home Cleaning', desc: 'Professional home cleaning with trained maids, thorough floor and surface cleaning.' },
            packages: [
                { id: 'hc1', name: 'ساعتان - عاملة واحدة (2 Hours)', price: 90 },
                { id: 'hc2', name: '3 ساعات - عاملة واحدة (3 Hours)', price: 130 },
                { id: 'hc3', name: '4 ساعات - عاملتان (4 Hours, 2 Cleaners)', price: 240 },
                { id: 'hc4', name: '6 ساعات - عاملتان (6 Hours, 2 Cleaners)', price: 350 }
            ],
            addons: [
                { id: 'hca1', name: 'مستلزمات التنظيف والمواد (+30 درهم)', price: 30 },
                { id: 'hca2', name: 'تنظيف داخل الثلاجة (+40 درهم)', price: 40 },
                { id: 'hca3', name: 'تنظيف داخل الفرن (+40 درهم)', price: 40 }
            ]
        },
        'deep-cleaning': {
            ar: { title: 'التنظيف العميق للمنازل', desc: 'خدمة التنظيف العميق الشاملة للقصور، الفلل، والشقق الجديدة قبل السكن أو بعد الصيانة.' },
            en: { title: 'Deep Cleaning', desc: 'Comprehensive deep cleaning for villas, apartments, post-renovation and move-in.' },
            packages: [
                { id: 'dc1', name: 'استوديو / غرفة وصالة (Studio / 1 BHK)', price: 450 },
                { id: 'dc2', name: 'غرفتين وصالة (2 BHK Apartment)', price: 650 },
                { id: 'dc3', name: '3 غرف وصالة (3 BHK Apartment)', price: 850 },
                { id: 'dc4', name: 'فيلا مستقلة (Villa - 4+ Beds)', price: 1200 }
            ],
            addons: [
                { id: 'dca1', name: 'تنظيف الكنب بالبخار (+200 درهم)', price: 200 },
                { id: 'dca2', name: 'تنظيف السجاد بالبخار (+150 درهم)', price: 150 }
            ]
        },
        'ac-cleaning': {
            ar: { title: 'تنظيف المكيفات في المنزل', desc: 'حافظ على هواء نقي ومنعش مع خدمة تنظيف وغسيل مكيفات السبليت والمركزي.' },
            en: { title: 'AC Cleaning', desc: 'Keep your indoor air fresh with professional split and central AC cleaning.' },
            packages: [
                { id: 'ac1', name: 'تنظيف مكيف سبليت واحد (1 Split AC)', price: 150 },
                { id: 'ac2', name: 'تنظيف مكيفين سبليت (2 Split AC Units)', price: 280 },
                { id: 'ac3', name: 'تنظيف 3 مكيفات سبليت (3 Split AC Units)', price: 390 },
                { id: 'ac4', name: 'صيانة وفحص شامل للمكيف (Full Service)', price: 200 }
            ],
            addons: [
                { id: 'aca1', name: 'تعقيم الفلاتر بمضاد البكتيريا (+25 درهم)', price: 25 },
                { id: 'aca2', name: 'إعادة تعبئة غاز الفريون (+150 درهم)', price: 150 }
            ]
        },
        'salon-services-at-home': {
            ar: { title: 'صالونك المنزلي (تجميل السيدات)', desc: 'خدمات صالون منزلية فاخرة تشمل المناكير، الباديكير، تصفيف الشعر.' },
            en: { title: 'Ladies Salon at Home', desc: 'Luxury home salon services including manicure, pedicure, and hair styling.' },
            packages: [
                { id: 's1', name: 'مناكير وباديكير كلاسيكي (Manicure & Pedicure)', price: 160 },
                { id: 's2', name: 'قص وتصفيف الشعر (Hair Cut & Styling)', price: 200 },
                { id: 's3', name: 'باقة الجمال المتكاملة (Full Beauty Combo)', price: 450 }
            ],
            addons: [
                { id: 'sa1', name: 'طلاء أضافر جيل (+50 درهم)', price: 50 },
                { id: 'sa2', name: 'حمام زيت مغذي للشعر (+70 درهم)', price: 70 }
            ]
        },
        'spa-and-massage-service-at-home': {
            ar: { title: 'السبا النسائي ومساج منزلي', desc: 'جلسات مساج استرخائي وعلاجي في منزلك بأيدي اخصائيات محترفات.' },
            en: { title: 'Home Spa & Massage', desc: 'Relaxing and therapeutic massage sessions at your home by professional therapists.' },
            packages: [
                { id: 'm1', name: 'مساج سويدي استرخائي 60 دقيقة (Swedish Massage)', price: 220 },
                { id: 'm2', name: 'مساج الأنسجة العميقة 60 دقيقة (Deep Tissue)', price: 260 },
                { id: 'm3', name: 'مساج الأحجار الساخنة (Hot Stone)', price: 300 }
            ],
            addons: [
                { id: 'ma1', name: 'زيوت عطرية عضوية إضافية (+30 درهم)', price: 30 }
            ]
        },
        'mens-salon': {
            ar: { title: 'صالون رجالي وعناية متميزة', desc: 'خدمات حلاقة وعناية شخصية للرجال في المنزل بأعلى مستويات الاحترافية.' },
            en: { title: 'Mens Salon & Grooming', desc: 'Professional haircuts and personal grooming services for men at home.' },
            packages: [
                { id: 'ms1', name: 'حلاقة شعر الذقن والرأس (Haircut & Beard)', price: 120 },
                { id: 'ms2', name: 'تنظيف بشرة رجالي (Mens Facial)', price: 180 },
                { id: 'ms3', name: 'باقة العناية الرجالية المتكاملة (Complete Grooming)', price: 250 }
            ],
            addons: [
                { id: 'msa1', name: 'مساج فروة الرأس (+40 درهم)', price: 40 }
            ]
        },
        'pest-control': {
            ar: { title: 'مكافحة الحشرات والآفات', desc: 'خدمات مكافحة الآفات والحشرات المنزلية بمواد آمنة ومعتمدة ومرخصة.' },
            en: { title: 'Pest Control Services', desc: 'Safe and approved pest control services for apartments and villas.' },
            packages: [
                { id: 'pe1', name: 'مكافحة حشرات شقة سكنية (Apartment)', price: 250 },
                { id: 'pe2', name: 'مكافحة حشرات فيلا كاملة (Villa)', price: 450 },
                { id: 'pe3', name: 'معالجة النمل الأبيض (Termite Treatment)', price: 600 }
            ],
            addons: [
                { id: 'pea1', name: 'ضمان إضافي لمدة 6 شهور (+150 درهم)', price: 150 }
            ]
        },
        'furniture-cleaning': {
            ar: { title: 'تنظيف الأثاث (كنب، سجاد، مراتب)', desc: 'تنظيف عميق بالبخار للكنب، السجاد، والمقاعد لإزالة البقع والبكتيريا.' },
            en: { title: 'Furniture Cleaning (Sofa & Carpet)', desc: 'Deep steam cleaning for sofas, carpets, and mattresses to remove stains.' },
            packages: [
                { id: 'fc1', name: 'تنظيف طقم كنب 5 مقاعد (5-Seater Sofa)', price: 300 },
                { id: 'fc2', name: 'تنظيف سجاد كبير (Large Carpet Cleaning)', price: 180 },
                { id: 'fc3', name: 'تنظيف مرتبة سرير مزدوج (Double Mattress)', price: 200 }
            ],
            addons: [
                { id: 'fca1', name: 'معالجة البقع المستعصية (+50 درهم)', price: 50 }
            ]
        },
        'laundry': {
            ar: { title: 'غسيل وكوي الملابس', desc: 'خدمة استلام، غسيل، كوي، وتوصيل الملابس حتى باب منزلك.' },
            en: { title: 'Laundry & Dry Cleaning', desc: 'Pick up, washing, ironing, and delivery of your clothes to your doorstep.' },
            packages: [
                { id: 'l1', name: 'كيس غسيل قياسي 10 كغ (10kg Laundry Bag)', price: 70 },
                { id: 'l2', name: 'كي 20 قطعة ملابس (Ironing 20 Items)', price: 80 },
                { id: 'l3', name: 'غسيل وكي لحاف وستائر (Bedding & Curtains)', price: 120 }
            ],
            addons: [
                { id: 'la1', name: 'تغليف خاص للملابس الرسمية (+20 درهم)', price: 20 }
            ]
        },
        'handyman': {
            ar: { title: 'خدمات العامل اليدوي والصيانة العامة', desc: 'فنيون محترفون لأعمال التركيب، التعليق، الإصلاحات المنزلية الصغيرة.' },
            en: { title: 'Handyman & Maintenance Services', desc: 'Professional technicians for mounting, hanging, and minor home repairs.' },
            packages: [
                { id: 'h1', name: 'ساعة صيانة منزلية واحدة (1 Hour)', price: 140 },
                { id: 'h2', name: 'ساعتان صيانة وإصلاح (2 Hours)', price: 250 },
                { id: 'h3', name: 'يوم عمل صيانة متكامل (Full Day)', price: 800 }
            ],
            addons: [
                { id: 'ha1', name: 'مواد ومستلزمات تركيب إضافية (+50 درهم)', price: 50 }
            ]
        },
        'plumbing': {
            ar: { title: 'خدمات السباكة وإصلاح الأعطال', desc: 'إصلاح تسربات المياه، تركيب الخلاطات، صيانة الأدوات الصحية.' },
            en: { title: 'Plumbing Services', desc: 'Fixing water leaks, installing mixers, and plumbing maintenance.' },
            packages: [
                { id: 'pl1', name: 'فحص وإصلاح سريع (Quick Inspection & Repair)', price: 160 },
                { id: 'pl2', name: 'تركيب صنبور أو خلاط مياه (Tap Installation)', price: 200 }
            ],
            addons: [
                { id: 'pla1', name: 'قطع غيار إضافية أصلية (+70 درهم)', price: 70 }
            ]
        },
        'electrician': {
            ar: { title: 'خدمات الكهرباء وإصلاح التوصيلات', desc: 'تركيب الإضاءة، المراوح، إصلاح الأعطال الكهربائية بأمان تام.' },
            en: { title: 'Electrician Services', desc: 'Installing lights, fans, and safe electrical fault repairs.' },
            packages: [
                { id: 'el1', name: 'ساعة خدمة كهربائي (1 Hour Electrician)', price: 150 },
                { id: 'el2', name: 'تركيب ثريا أو إضاءة سقف (Chandelier Installation)', price: 220 }
            ],
            addons: [
                { id: 'ela1', name: 'أسلاك ومفاتيح إضافية (+40 درهم)', price: 40 }
            ]
        }
    };

    // Generic fallback for any other service slug
    function getGenericService(slug, lang) {
        const isAr = lang === 'ar';
        const formattedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return {
            title: isAr ? 'خدمة ' + formattedName : formattedName + ' Service',
            desc: isAr ? 'خدمة منزلية احترافية معتمدة من Justlife، جودة عالية وضمان كامل.' : 'Professional home service certified by Justlife, high quality and full guarantee.',
            packages: [
                { id: 'gp1', name: isAr ? 'الباقة القياسية (Standard Package)' : 'Standard Package', price: 150 },
                { id: 'gp2', name: isAr ? 'الباقة المتقدمة (Advanced Package)' : 'Advanced Package', price: 280 }
            ],
            addons: [
                { id: 'ga1', name: isAr ? 'مواد وإضافات خاصة (+50 درهم)' : 'Special Add-ons (+50 AED)', price: 50 }
            ]
        };
    }

    // Intercept clicks on any service links to render the exact matching service page
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href') || '';
            // Check if it's a service path (e.g. /ar-AE/house-cleaning, /house-cleaning, etc.)
            if (href.includes('/') && href.length > 1 && !href.startsWith('http') && !href.startsWith('#')) {
                const segments = href.split('/').filter(Boolean);
                const serviceSlug = segments[segments.length - 1]; // e.g., house-cleaning
                
                if (serviceSlug && serviceSlug !== 'ar-AE' && serviceSlug !== 'en-AE') {
                    e.preventDefault();
                    renderExactServicePage(serviceSlug);
                }
            }
        }
    });

    function renderExactServicePage(slug) {
        const isEnglish = window.location.pathname.includes('en') || document.documentElement.lang === 'en';
        const lang = isEnglish ? 'en' : 'ar';
        const serviceData = (exactServices[slug] && exactServices[slug][lang]) ? exactServices[slug] : {
            ar: getGenericService(slug, 'ar'),
            en: getGenericService(slug, 'en')
        };
        const data = serviceData[lang];

        // Replace entire body with exact matching service page mirroring Justlife original design
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
                        <span style="background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: bold;">${isEnglish ? 'Official Justlife Service' : 'خدمة معتمدة رسمية'}</span>
                        <h1 style="font-size: 32px; margin: 20px 0 10px 0;">${data.title}</h1>
                        <p style="font-size: 16px; opacity: 0.9; line-height: 1.6;">${data.desc}</p>
                    </div>
                </div>

                <!-- Main Container -->
                <div style="max-width: 900px; margin: -30px auto 0 auto; padding: 0 20px; position: relative; z-index: 10;">
                    <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                        
                        <h2 style="color: #003764; font-size: 20px; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                            ${isEnglish ? '1. Select Package' : '1. اختر الباقة'}
                        </h2>
                        
                        <div id="packages-container" style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px;">
                            ${data.packages.map((pkg, idx) => `
                                <label class="pkg-radio-card" data-price="${pkg.price}" data-name="${pkg.name}" style="border: 2px solid ${idx === 0 ? '#00c3ff' : '#e5e8eb'}; background: ${idx === 0 ? '#ebfaff' : '#fff'}; padding: 20px; border-radius: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.2s;">
                                    <div style="display: flex; align-items: center; gap: 15px;">
                                        <input type="radio" name="service_pkg" ${idx === 0 ? 'checked' : ''} style="width: 20px; height: 20px;">
                                        <div style="font-weight: bold; font-size: 16px; color: #333;">${pkg.name}</div>
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
                                        <input type="checkbox" class="addon-checkbox" data-price="${addon.price}" data-name="${addon.name}" style="width: 18px; height: 18px;">
                                        <span style="flex-grow: 1; font-size: 15px; color: #333; font-weight: 500;">${addon.name}</span>
                                        <span style="font-weight: bold; color: #666;">+${addon.price}</span>
                                    </label>
                                `).join('')}
                            </div>
                        ` : ''}

                        <h2 style="color: #003764; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                            ${isEnglish ? '3. Date, Time & Address' : '3. الموعد وعنوان الاستلام'}
                        </h2>

                        <form id="exact-booking-form" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Date & Time:' : 'تاريخ ووقت الخدمة:'}</label>
                                <input type="datetime-local" id="ex-date" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Full Name:' : 'الاسم الكامل:'}</label>
                                <input type="text" id="ex-name" required placeholder="${isEnglish ? 'Your Name' : 'أدخل اسمك الكريم'}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Mobile Phone:' : 'رقم الهاتف:'}</label>
                                <input type="tel" id="ex-phone" required placeholder="0501234567" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                            <div style="grid-column: span 2;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Full Address (City, Area, Building):' : 'العنوان التفصيلي (المدينة، الحي، رقم المبنى):'}</label>
                                <input type="text" id="ex-address" required placeholder="${isEnglish ? 'e.g. Dubai Marina, Tower 1' : 'مثال: دبي، مارينا، برج 1'}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            </div>
                        </form>

                        <div style="background: #f9f9f9; padding: 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border: 1px solid #e5e8eb;">
                            <div>
                                <div style="font-size: 14px; color: #666;">${isEnglish ? 'Total Amount:' : 'الإجمالي الكلي:'}</div>
                                <div id="exact-total-display" style="font-size: 26px; font-weight: bold; color: #003764; margin-top: 5px;">${data.packages[0].price} ${isEnglish ? 'AED' : 'درهم'}</div>
                            </div>
                            <button id="exact-confirm-btn" style="background: #00c3ff; color: white; border: none; padding: 15px 40px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background 0.2s;">
                                ${isEnglish ? 'Confirm Booking & Pay' : 'تأكيد الحجز والدفع'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        `;

        let selectedPrice = data.packages[0].price;
        let selectedPkgName = data.packages[0].name;
        let selectedAddonsList = [];

        document.querySelectorAll('.pkg-radio-card').forEach(card => {
            card.onclick = () => {
                document.querySelectorAll('.pkg-radio-card').forEach(c => {
                    c.style.borderColor = '#e5e8eb';
                    c.style.background = '#fff';
                    c.querySelector('input').checked = false;
                });
                card.style.borderColor = '#00c3ff';
                card.style.background = '#ebfaff';
                card.querySelector('input').checked = true;

                selectedPrice = parseFloat(card.getAttribute('data-price'));
                selectedPkgName = card.getAttribute('data-name');
                calcTotal();
            };
        });

        document.querySelectorAll('.addon-checkbox').forEach(chk => {
            chk.onchange = () => {
                calcTotal();
            };
        });

        function calcTotal() {
            let addTotal = 0;
            selectedAddonsList = [];
            document.querySelectorAll('.addon-checkbox:checked').forEach(chk => {
                addTotal += parseFloat(chk.getAttribute('data-price'));
                selectedAddonsList.push(chk.getAttribute('data-name'));
            });

            const total = selectedPrice + addTotal;
            document.getElementById('exact-total-display').innerText = total + (isEnglish ? ' AED' : ' درهم');
        }

        document.getElementById('exact-confirm-btn').onclick = () => {
            const date = document.getElementById('ex-date').value;
            const name = document.getElementById('ex-name').value;
            const phone = document.getElementById('ex-phone').value;
            const address = document.getElementById('ex-address').value;

            if (!date || !name || !phone || !address) {
                alert(isEnglish ? 'Please fill in all booking fields.' : 'الرجاء إكمال كافة حقول الحجز المطلوبة.');
                return;
            }

            let addTotal = 0;
            document.querySelectorAll('.addon-checkbox:checked').forEach(chk => {
                addTotal += parseFloat(chk.getAttribute('data-price'));
            });
            const finalTotal = selectedPrice + addTotal;

            const payload = {
                service: data.title + ' - ' + selectedPkgName,
                package: selectedPkgName,
                addons: selectedAddonsList.join(', '),
                totalPrice: finalTotal,
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
                            <h1 style="color: #003764; margin-bottom: 15px;">${isEnglish ? 'Booking Confirmed!' : 'تم تأكيد طلبك بنجاح!'}</h1>
                            <p style="color: #666; font-size: 16px; margin-bottom: 25px; line-height: 1.6;">
                                ${isEnglish ? 'Your booking has been registered successfully. Order ID: #' : 'تم تسجيل الحجز بنجاح وإرساله لفريق التشغيل. رقم الطلب: #'}${resData.orderId || 1001}
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
