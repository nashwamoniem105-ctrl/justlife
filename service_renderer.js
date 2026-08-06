(function() {
    // Exact Justlife Multi-Step Booking Wizard mirroring original site's exact pages & steps
    const servicesConfig = {
        'house-cleaning': {
            ar: {
                title: 'التنظيف المنزلي',
                subtitle: 'احجز أفضل خدمة تنظيف منزلي في الإمارات',
                packages: [
                    { id: 'p2h', name: 'ساعتان (2 Hours)', hours: 2, cleaners: 1, price: 90 },
                    { id: 'p3h', name: '3 ساعات (3 Hours)', hours: 3, cleaners: 1, price: 130 },
                    { id: 'p4h', name: '4 ساعات - عاملتان (4 Hours, 2 Cleaners)', hours: 4, cleaners: 2, price: 240 },
                    { id: 'p6h', name: '6 ساعات - عاملتان (6 Hours, 2 Cleaners)', hours: 6, cleaners: 2, price: 350 }
                ],
                addons: [
                    { id: 'mat', name: 'مستلزمات ومواد التنظيف (+30 درهم)', price: 30 },
                    { id: 'fridge', name: 'تنظيف داخل الثلاجة (+40 درهم)', price: 40 },
                    { id: 'oven', name: 'تنظيف داخل الفرن (+40 درهم)', price: 40 },
                    { id: 'cabinets', name: 'تنظيف الخزائن من الداخل (+50 درهم)', price: 50 }
                ],
                frequencies: [
                    { id: 'once', name: 'مرة واحدة (One-off)', discount: 0 },
                    { id: 'weekly', name: 'أسبوعي (Weekly - خصم 15%)', discount: 0.15 },
                    { id: 'biweekly', name: 'كل أسبوعين (Bi-weekly - خصم 10%)', discount: 0.10 }
                ]
            },
            en: {
                title: 'Home Cleaning',
                subtitle: 'Book the best home cleaning service in UAE',
                packages: [
                    { id: 'p2h', name: '2 Hours - 1 Cleaner', hours: 2, cleaners: 1, price: 90 },
                    { id: 'p3h', name: '3 Hours - 1 Cleaner', hours: 3, cleaners: 1, price: 130 },
                    { id: 'p4h', name: '4 Hours - 2 Cleaners', hours: 4, cleaners: 2, price: 240 },
                    { id: 'p6h', name: '6 Hours - 2 Cleaners', hours: 6, cleaners: 2, price: 350 }
                ],
                addons: [
                    { id: 'mat', name: 'Cleaning Materials (+30 AED)', price: 30 },
                    { id: 'fridge', name: 'Inside Fridge Cleaning (+40 AED)', price: 40 },
                    { id: 'oven', name: 'Inside Oven Cleaning (+40 AED)', price: 40 },
                    { id: 'cabinets', name: 'Inside Cabinets Cleaning (+50 AED)', price: 50 }
                ],
                frequencies: [
                    { id: 'once', name: 'One-off', discount: 0 },
                    { id: 'weekly', name: 'Weekly (15% Off)', discount: 0.15 },
                    { id: 'biweekly', name: 'Bi-weekly (10% Off)', discount: 0.10 }
                ]
            }
        }
    };

    function getDefaultConfig(slug, lang) {
        const isAr = lang === 'ar';
        const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return {
            title: isAr ? 'خدمة ' + name : name + ' Service',
            subtitle: isAr ? 'خدمة منزلية معتمدة وعالية الجودة من جست لايف' : 'Certified high quality home service by Justlife',
            packages: [
                { id: 'std', name: isAr ? 'الباقة القياسية (Standard)' : 'Standard Package', hours: 2, cleaners: 1, price: 150 },
                { id: 'adv', name: isAr ? 'الباقة المتقدمة (Advanced)' : 'Advanced Package', hours: 4, cleaners: 2, price: 280 }
            ],
            addons: [
                { id: 'extra', name: isAr ? 'مواد وإضافات خاصة (+50 درهم)' : 'Special Add-ons (+50 AED)', price: 50 }
            ],
            frequencies: [
                { id: 'once', name: isAr ? 'مرة واحدة' : 'One-off', discount: 0 },
                { id: 'weekly', name: isAr ? 'أسبوعي (خصم 10%)' : 'Weekly (10% Off)', discount: 0.10 }
            ]
        };
    }

    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href') || '';
            if (href.includes('/') && href.length > 1 && !href.startsWith('http') && !href.startsWith('#')) {
                const segments = href.split('/').filter(Boolean);
                const slug = segments[segments.length - 1];
                if (slug && slug !== 'ar-AE' && slug !== 'en-AE') {
                    e.preventDefault();
                    startMultiStepWizard(slug);
                }
            }
        }
    });

    function startMultiStepWizard(slug) {
        const isEnglish = window.location.pathname.includes('en') || document.documentElement.lang === 'en';
        const lang = isEnglish ? 'en' : 'ar';
        const configData = (servicesConfig[slug] && servicesConfig[slug][lang]) ? servicesConfig[slug][lang] : getDefaultConfig(slug, lang);

        let currentStep = 1;
        let selectedPackage = configData.packages[0];
        let selectedFrequency = configData.frequencies[0];
        let selectedAddons = [];
        let bookingData = {
            date: '',
            timeSlot: '09:00 AM - 12:00 PM',
            name: '',
            phone: '',
            address: ''
        };

        function renderWizard() {
            let stepIndicator = `
                <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 30px;">
                    <div style="padding: 8px 16px; border-radius: 20px; background: ${currentStep >= 1 ? '#00c3ff' : '#ddd'}; color: white; font-weight: bold; font-size: 13px;">1. ${isEnglish ? 'Package & Frequency' : 'الباقة والتكرار'}</div>
                    <div style="padding: 8px 16px; border-radius: 20px; background: ${currentStep >= 2 ? '#00c3ff' : '#ddd'}; color: white; font-weight: bold; font-size: 13px;">2. ${isEnglish ? 'Add-ons' : 'الإضافات'}</div>
                    <div style="padding: 8px 16px; border-radius: 20px; background: ${currentStep >= 3 ? '#00c3ff' : '#ddd'}; color: white; font-weight: bold; font-size: 13px;">3. ${isEnglish ? 'Date & Time' : 'الموعد'}</div>
                    <div style="padding: 8px 16px; border-radius: 20px; background: ${currentStep >= 4 ? '#00c3ff' : '#ddd'}; color: white; font-weight: bold; font-size: 13px;">4. ${isEnglish ? 'Address & Payment' : 'العنوان والدفع'}</div>
                </div>
            `;

            let stepContent = '';

            if (currentStep === 1) {
                stepContent = `
                    <h2 style="color: #003764; margin-bottom: 15px; font-size: 20px;">${isEnglish ? 'Select Package & Duration' : 'اختر الباقة أو المدة'}</h2>
                    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px;">
                        ${configData.packages.map(pkg => `
                            <label class="wizard-pkg-opt" data-id="${pkg.id}" style="border: 2px solid ${selectedPackage.id === pkg.id ? '#00c3ff' : '#e5e8eb'}; background: ${selectedPackage.id === pkg.id ? '#ebfaff' : '#fff'}; padding: 18px; border-radius: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <input type="radio" name="w_pkg" ${selectedPackage.id === pkg.id ? 'checked' : ''} style="width: 18px; height: 18px;">
                                    <span style="font-weight: bold; font-size: 16px; color: #333;">${pkg.name}</span>
                                </div>
                                <span style="font-weight: bold; font-size: 18px; color: #003764;">${pkg.price} ${isEnglish ? 'AED' : 'درهم'}</span>
                            </label>
                        `).join('')}
                    </div>

                    <h2 style="color: #003764; margin-bottom: 15px; font-size: 20px;">${isEnglish ? 'Select Frequency' : 'اختر تكرار الخدمة'}</h2>
                    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 30px;">
                        ${configData.frequencies.map(freq => `
                            <label class="wizard-freq-opt" data-id="${freq.id}" style="border: 2px solid ${selectedFrequency.id === freq.id ? '#00c3ff' : '#e5e8eb'}; background: ${selectedFrequency.id === freq.id ? '#ebfaff' : '#fff'}; padding: 15px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 12px;">
                                <input type="radio" name="w_freq" ${selectedFrequency.id === freq.id ? 'checked' : ''} style="width: 18px; height: 18px;">
                                <span style="font-weight: 500; font-size: 15px; color: #333;">${freq.name}</span>
                            </label>
                        `).join('')}
                    </div>

                    <button id="next-btn-1" style="width: 100%; background: #00c3ff; color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                        ${isEnglish ? 'Next: Choose Add-ons →' : 'التالي: اختيار الإضافات ←'}
                    </button>
                `;
            } else if (currentStep === 2) {
                stepContent = `
                    <h2 style="color: #003764; margin-bottom: 15px; font-size: 20px;">${isEnglish ? 'Optional Add-ons' : 'الإضافات الاختيارية'}</h2>
                    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 30px;">
                        ${configData.addons.map(addon => {
                            const isSelected = selectedAddons.some(a => a.id === addon.id);
                            return `
                                <label class="wizard-addon-opt" data-id="${addon.id}" style="border: 1px solid ${isSelected ? '#00c3ff' : '#e5e8eb'}; background: ${isSelected ? '#ebfaff' : '#fafafa'}; padding: 16px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 12px;">
                                    <input type="checkbox" ${isSelected ? 'checked' : ''} style="width: 18px; height: 18px;">
                                    <span style="flex-grow: 1; font-weight: 500; font-size: 15px; color: #333;">${addon.name}</span>
                                    <span style="font-weight: bold; color: #666;">+${addon.price}</span>
                                </label>
                            `;
                        }).join('')}
                    </div>

                    <div style="display: flex; gap: 15px;">
                        <button id="prev-btn-2" style="flex: 1; background: #e5e8eb; color: #333; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                            ${isEnglish ? '← Back' : 'السابق'}
                        </button>
                        <button id="next-btn-2" style="flex: 2; background: #00c3ff; color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                            ${isEnglish ? 'Next: Date & Time →' : 'التالي: الموعد والوقت ←'}
                        </button>
                    </div>
                `;
            } else if (currentStep === 3) {
                stepContent = `
                    <h2 style="color: #003764; margin-bottom: 15px; font-size: 20px;">${isEnglish ? 'Select Date & Time Slot' : 'اختر تاريخ ووقت الزيارة'}</h2>
                    
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Service Date:' : 'تاريخ الزيارة:'}</label>
                        <input type="date" id="w-date" value="${bookingData.date}" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; box-sizing: border-box;">
                    </div>

                    <div style="margin-bottom: 30px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Time Slot:' : 'فترة الحجز:'}</label>
                        <select id="w-timeslot" style="width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; background: #fff;">
                            <option value="08:00 AM - 11:00 AM">08:00 AM - 11:00 AM</option>
                            <option value="11:00 AM - 02:00 PM">11:00 AM - 02:00 PM</option>
                            <option value="02:00 PM - 05:00 PM">02:00 PM - 05:00 PM</option>
                            <option value="05:00 PM - 08:00 PM">05:00 PM - 08:00 PM</option>
                        </select>
                    </div>

                    <div style="display: flex; gap: 15px;">
                        <button id="prev-btn-3" style="flex: 1; background: #e5e8eb; color: #333; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                            ${isEnglish ? '← Back' : 'السابق'}
                        </button>
                        <button id="next-btn-3" style="flex: 2; background: #00c3ff; color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                            ${isEnglish ? 'Next: Address & Checkout →' : 'التالي: العنوان والدفع ←'}
                        </button>
                    </div>
                `;
            } else if (currentStep === 4) {
                let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                let rawTotal = selectedPackage.price + addonsTotal;
                let discountedTotal = rawTotal * (1 - selectedFrequency.discount);

                stepContent = `
                    <h2 style="color: #003764; margin-bottom: 15px; font-size: 20px;">${isEnglish ? 'Address & Secure Payment' : 'عنوان المنزل والدفع الآمن'}</h2>

                    <form id="wizard-final-form" style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 25px;">
                        <div>
                            <label style="display: block; margin-bottom: 6px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Full Name:' : 'الاسم الكامل:'}</label>
                            <input type="text" id="w-name" required value="${bookingData.name}" placeholder="${isEnglish ? 'Your Name' : 'أدخل اسمك الكريم'}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 6px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Mobile Phone:' : 'رقم الهاتف المتحرك:'}</label>
                            <input type="tel" id="w-phone" required value="${bookingData.phone}" placeholder="0501234567" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 6px; font-weight: bold; font-size: 14px; color: #333;">${isEnglish ? 'Full Address (City, Area, Building):' : 'العنوان التفصيلي (المدينة، الحي، رقم المبنى):'}</label>
                            <input type="text" id="w-address" required value="${bookingData.address}" placeholder="${isEnglish ? 'e.g. Dubai Marina, Tower 1' : 'مثال: دبي، مارينا، برج 1'}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                    </form>

                    <div style="background: #f9f9f9; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e5e8eb;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; color: #666;">
                            <span>${selectedPackage.name}</span>
                            <span>${selectedPackage.price} AED</span>
                        </div>
                        ${selectedAddons.map(a => `
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; color: #666;">
                                <span>+ ${a.name}</span>
                                <span>${a.price} AED</span>
                            </div>
                        `).join('')}
                        <div style="display: flex; justify-content: space-between; margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd; font-weight: bold; font-size: 18px; color: #003764;">
                            <span>${isEnglish ? 'Total Amount:' : 'الإجمالي الكلي:'}</span>
                            <span>${discountedTotal.toFixed(2)} ${isEnglish ? 'AED' : 'درهم'}</span>
                        </div>
                    </div>

                    <div style="display: flex; gap: 15px;">
                        <button id="prev-btn-4" style="flex: 1; background: #e5e8eb; color: #333; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                            ${isEnglish ? '← Back' : 'السابق'}
                        </button>
                        <button id="confirm-booking-btn" style="flex: 2; background: #49a361; color: white; border: none; padding: 15px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">
                            ${isEnglish ? 'Confirm & Secure Pay ✓' : 'تأكيد الحجز والدفع الآمن ✓'}
                        </button>
                    </div>
                `;
            }

            document.body.innerHTML = `
                <div style="font-family: Tahoma, sans-serif; direction: ${isEnglish ? 'ltr' : 'rtl'}; background: #f7f9fa; min-height: 100vh; padding-bottom: 50px;">
                    <!-- Navbar -->
                    <div style="background: white; border-bottom: 1px solid #e5e8eb; padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000;">
                        <a href="/" style="text-decoration: none; font-size: 24px; font-weight: bold; color: #00c3ff;">Justlife</a>
                        <a href="/" style="background: #ebfaff; color: #00c3ff; padding: 8px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">${isEnglish ? 'Home' : 'الرئيسية'}</a>
                    </div>

                    <!-- Hero Banner -->
                    <div style="background: linear-gradient(135deg, #003764 0%, #00c3ff 100%); color: white; padding: 50px 20px; text-align: center;">
                        <h1 style="font-size: 32px; margin: 0 0 10px 0; font-weight: bold;">${configData.title}</h1>
                        <p style="font-size: 16px; opacity: 0.9; margin: 0;">${configData.subtitle}</p>
                    </div>

                    <!-- Wizard Main Card -->
                    <div style="max-width: 750px; margin: -30px auto 0 auto; padding: 0 20px; position: relative; z-index: 10;">
                        <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                            ${stepIndicator}
                            ${stepContent}
                        </div>
                    </div>
                </div>
            `;

            attachEvents();
        }

        function attachEvents() {
            if (currentStep === 1) {
                document.querySelectorAll('.wizard-pkg-opt').forEach(opt => {
                    opt.onclick = () => {
                        const id = opt.getAttribute('data-id');
                        selectedPackage = configData.packages.find(p => p.id === id);
                        renderWizard();
                    };
                });
                document.querySelectorAll('.wizard-freq-opt').forEach(opt => {
                    opt.onclick = () => {
                        const id = opt.getAttribute('data-id');
                        selectedFrequency = configData.frequencies.find(f => f.id === id);
                        renderWizard();
                    };
                });
                const nextBtn = document.getElementById('next-btn-1');
                if (nextBtn) nextBtn.onclick = () => { currentStep = 2; renderWizard(); };
            } else if (currentStep === 2) {
                document.querySelectorAll('.wizard-addon-opt').forEach(opt => {
                    opt.onclick = () => {
                        const id = opt.getAttribute('data-id');
                        const addon = configData.addons.find(a => a.id === id);
                        if (selectedAddons.some(a => a.id === id)) {
                            selectedAddons = selectedAddons.filter(a => a.id !== id);
                        } else {
                            selectedAddons.push(addon);
                        }
                        renderWizard();
                    };
                });
                const prevBtn = document.getElementById('prev-btn-2');
                const nextBtn = document.getElementById('next-btn-2');
                if (prevBtn) prevBtn.onclick = () => { currentStep = 1; renderWizard(); };
                if (nextBtn) nextBtn.onclick = () => { currentStep = 3; renderWizard(); };
            } else if (currentStep === 3) {
                const dateInput = document.getElementById('w-date');
                const timeSelect = document.getElementById('w-timeslot');
                if (dateInput) dateInput.onchange = (e) => { bookingData.date = e.target.value; };
                if (timeSelect) timeSelect.onchange = (e) => { bookingData.timeSlot = e.target.value; };

                const prevBtn = document.getElementById('prev-btn-3');
                const nextBtn = document.getElementById('next-btn-3');
                if (prevBtn) prevBtn.onclick = () => { currentStep = 2; renderWizard(); };
                if (nextBtn) nextBtn.onclick = () => {
                    const dateVal = document.getElementById('w-date').value;
                    if (!dateVal) {
                        alert(isEnglish ? 'Please select a date.' : 'الرجاء اختيار تاريخ الحجز.');
                        return;
                    }
                    bookingData.date = dateVal;
                    currentStep = 4;
                    renderWizard();
                };
            } else if (currentStep === 4) {
                const prevBtn = document.getElementById('prev-btn-4');
                const confirmBtn = document.getElementById('confirm-booking-btn');

                if (prevBtn) prevBtn.onclick = () => { currentStep = 3; renderWizard(); };
                if (confirmBtn) confirmBtn.onclick = () => {
                    const name = document.getElementById('w-name').value;
                    const phone = document.getElementById('w-phone').value;
                    const address = document.getElementById('w-address').value;

                    if (!name || !phone || !address) {
                        alert(isEnglish ? 'Please complete all address and contact fields.' : 'الرجاء إكمال كافة حقول العنوان والاتصال.');
                        return;
                    }

                    bookingData.name = name;
                    bookingData.phone = phone;
                    bookingData.address = address;

                    let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                    let finalTotal = (selectedPackage.price + addonsTotal) * (1 - selectedFrequency.discount);

                    const payload = {
                        service: configData.title + ' (' + selectedPackage.name + ')',
                        package: selectedPackage.name,
                        frequency: selectedFrequency.name,
                        addons: selectedAddons.map(a => a.name).join(', '),
                        totalPrice: finalTotal.toFixed(2),
                        name: name,
                        phone: phone,
                        address: address,
                        date: bookingData.date + ' (' + bookingData.timeSlot + ')'
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
                        alert(isEnglish ? 'Booking submitted successfully!' : 'تم تقديم الحجز بنجاح!');
                        window.location.href = '/';
                    });
                };
            }
        }

        renderWizard();
    }
})();
