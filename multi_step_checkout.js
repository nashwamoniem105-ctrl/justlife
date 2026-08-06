document.addEventListener('DOMContentLoaded', () => {
    // Detailed service configurations mirroring Justlife original flow
    const serviceConfigs = {
        'cleaning': {
            title: 'تنظيف المنازل (Home Cleaning)',
            packages: [
                { id: 'p1', name: 'ساعتان - عاملة واحدة (2 Hours, 1 Cleaner)', price: 90 },
                { id: 'p2', name: '3 ساعات - عاملة واحدة (3 Hours, 1 Cleaner)', price: 130 },
                { id: 'p3', name: '4 ساعات - عاملتان (4 Hours, 2 Cleaners)', price: 240 },
                { id: 'p4', name: '6 ساعات - عاملتان (6 Hours, 2 Cleaners)', price: 350 }
            ],
            addons: [
                { id: 'a1', name: 'مستلزمات التنظيف (+30 درهم)', price: 30 },
                { id: 'a2', name: 'تنظيف داخل الثلاجة (+40 درهم)', price: 40 },
                { id: 'a3', name: 'تنظيف داخل الفرن (+40 درهم)', price: 40 }
            ]
        },
        'ac': {
            title: 'تنظيف وصيانة المكيفات (AC Cleaning)',
            packages: [
                { id: 'ac1', name: 'تنظيف مكيف واحد (Split AC)', price: 150 },
                { id: 'ac2', name: 'تنظيف مكيفين (2 AC Units)', price: 280 },
                { id: 'ac3', name: 'تنظيف 3 مكيفات (3 AC Units)', price: 390 },
                { id: 'ac4', name: 'صيانة وفحص شامل (Full Service)', price: 200 }
            ],
            addons: [
                { id: 'aca1', name: 'تعقيم الفلاتر (+25 درهم)', price: 25 },
                { id: 'aca2', name: 'إعادة تعبئة غاز الفريون (+150 درهم)', price: 150 }
            ]
        },
        'salon': {
            title: 'صالون وتجميل السيدات (Ladies Salon & Spa)',
            packages: [
                { id: 's1', name: 'مناكير وباديكير منزلي (Manicure & Pedicure)', price: 160 },
                { id: 's2', name: 'قص وتصفيف شعر (Hair Styling)', price: 200 },
                { id: 's3', name: 'مساج استرخائي منزلي (Relaxing Massage)', price: 250 },
                { id: 's4', name: 'باقة الجمال المتكاملة (Full Beauty Combo)', price: 450 }
            ],
            addons: [
                { id: 'sa1', name: 'طلاء أضافر جيل (Gel Polish)', price: 50 },
                { id: 'sa2', name: 'حمام زيت للشعر (Hair Oil Treatment)', price: 70 }
            ]
        },
        'deep': {
            title: 'تنظيف عميق للمنازل (Deep Cleaning)',
            packages: [
                { id: 'd1', name: 'استوديو / غرفة وصالة (Studio / 1 BHK)', price: 450 },
                { id: 'd2', name: 'غرفتين وصالة (2 BHK Apartment)', price: 650 },
                { id: 'd3', name: '3 غرف وصالة (3 BHK Apartment)', price: 850 },
                { id: 'd4', name: 'فيلا مستقلة (Villa - 4+ Bedrooms)', price: 1200 }
            ],
            addons: [
                { id: 'da1', name: 'تنظيف الكنب بالبخار (Sofa Steam Cleaning)', price: 200 },
                { id: 'da2', name: 'تنظيف السجاد بالبخار (Carpet Steam Cleaning)', price: 150 }
            ]
        }
    };

    // Intercept clicks on services
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a, button, div[class*="service"], div[class*="card"], div[class*="category"]');
        if (!target) return;

        const text = (target.innerText || target.textContent || "").trim();
        if (text.includes('تنظيف') || text.includes('مكيفات') || text.includes('صالون') || text.includes('سبا') || text.includes('Cleaning') || text.includes('AC') || text.includes('Salon') || text.includes('احجز') || text.includes('Book') || text.includes('خدمة')) {
            e.preventDefault();
            let serviceKey = 'cleaning';
            if (text.includes('مكيف') || text.includes('AC')) serviceKey = 'ac';
            else if (text.includes('صالون') || text.includes('تجميل') || text.includes('Salon')) serviceKey = 'salon';
            else if (text.includes('عميق') || text.includes('Deep')) serviceKey = 'deep';
            
            openMultiStepBooking(serviceKey);
        }
    });

    function openMultiStepBooking(serviceKey) {
        const config = serviceConfigs[serviceKey] || serviceConfigs['cleaning'];
        
        let modal = document.getElementById('jl-multistep-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'jl-multistep-modal';
            modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 999999; direction: rtl; font-family: Tahoma, sans-serif;';
            document.body.appendChild(modal);
        }

        let currentStep = 1;
        let selectedPackage = config.packages[0];
        let selectedAddons = [];
        let bookingData = {};

        function renderStep() {
            let html = `
                <div style="background: white; width: 520px; max-width: 95%; max-height: 90vh; overflow-y: auto; padding: 30px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); position: relative;">
                    <button id="jl-ms-close" style="position: absolute; top: 20px; left: 20px; background: #f0f0f0; border: none; width: 35px; height: 35px; border-radius: 50%; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #333;">&times;</button>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">
                        <span style="background: #00c3ff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; margin-left: 10px;">${currentStep}</span>
                        <h2 style="color: #003764; margin: 0; font-size: 20px;">${config.title} - الخطوة ${currentStep} من 4</h2>
                    </div>
            `;

            if (currentStep === 1) {
                // Step 1: Package Selection
                html += `
                    <h3 style="font-size: 16px; color: #333; margin-bottom: 15px;">اختر الباقة المناسبة:</h3>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                `;
                config.packages.forEach(pkg => {
                    const isSelected = selectedPackage.id === pkg.id;
                    html += `
                        <div class="jl-pkg-option" data-id="${pkg.id}" style="border: 2px solid ${isSelected ? '#00c3ff' : '#ddd'}; background: ${isSelected ? '#ebfaff' : '#fff'}; padding: 15px; border-radius: 10px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-weight: bold; color: #333; font-size: 15px;">${pkg.name}</span>
                            <span style="color: #003764; font-weight: bold; font-size: 16px;">${pkg.price} درهم</span>
                        </div>
                    `;
                });
                html += `</div>`;

                if (config.addons && config.addons.length > 0) {
                    html += `
                        <h3 style="font-size: 16px; color: #333; margin-bottom: 10px;">الإضافات الاختيارية:</h3>
                        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                    `;
                    config.addons.forEach(addon => {
                        const isChecked = selectedAddons.some(a => a.id === addon.id);
                        html += `
                            <label style="display: flex; align-items: center; gap: 10px; background: #fafafa; padding: 10px 15px; border-radius: 8px; cursor: pointer; border: 1px solid #eee;">
                                <input type="checkbox" class="jl-addon-chk" data-id="${addon.id}" ${isChecked ? 'checked' : ''} style="width: 18px; height: 18px;">
                                <span style="flex-grow: 1; font-size: 14px; color: #333;">${addon.name}</span>
                                <span style="font-weight: bold; color: #666; font-size: 14px;">+${addon.price} درهم</span>
                            </label>
                        `;
                    });
                    html += `</div>`;
                }

                html += `<button id="jl-next-btn" style="width: 100%; padding: 14px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">التالي: الموعد والعنوان</button>`;
            
            } else if (currentStep === 2) {
                // Step 2: Date, Time & Address
                html += `
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">تاريخ ووقت الزيارة:</label>
                        <input type="datetime-local" id="jl-input-date" value="${bookingData.date || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">الاسم الكامل:</label>
                        <input type="text" id="jl-input-name" placeholder="أدخل اسمك الكريم" value="${bookingData.name || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">رقم الهاتف المتحرك:</label>
                        <input type="tel" id="jl-input-phone" placeholder="0501234567" value="${bookingData.phone || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">العنوان التفصيلي (المدينة، الحي، الشارع، رقم المبنى):</label>
                        <input type="text" id="jl-input-address" placeholder="مثال: دبي، مارينا، برج 1" value="${bookingData.address || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="jl-back-btn" style="width: 50%; padding: 14px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">السابق</button>
                        <button id="jl-next-btn" style="width: 50%; padding: 14px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">التالي: ملخص الطلب</button>
                    </div>
                `;

            } else if (currentStep === 3) {
                // Step 3: Summary & Total
                let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                let totalPrice = selectedPackage.price + addonsTotal;

                html += `
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #eee;">
                        <h3 style="margin-top: 0; color: #003764; font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">ملخص الحجز</h3>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>الخدمة:</strong> ${config.title}</p>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>الباقة:</strong> ${selectedPackage.name} (${selectedPackage.price} درهم)</p>
                        ${selectedAddons.length > 0 ? `<p style="margin: 8px 0; font-size: 14px;"><strong>الإضافات:</strong> ${selectedAddons.map(a => a.name).join(', ')}</p>` : ''}
                        <p style="margin: 8px 0; font-size: 14px;"><strong>العميل:</strong> ${bookingData.name} (${bookingData.phone})</p>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>العنوان:</strong> ${bookingData.address}</p>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>الموعد:</strong> ${bookingData.date}</p>
                        <div style="margin-top: 15px; border-top: 2px dashed #ddd; padding-top: 10px; display: flex; justify-content: space-between; font-size: 18px; color: #003764; font-weight: bold;">
                            <span>الإجمالي الكلي:</span>
                            <span>${totalPrice} درهم</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="jl-back-btn" style="width: 50%; padding: 14px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">السابق</button>
                        <button id="jl-next-btn" style="width: 50%; padding: 14px; background: #49a361; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">متابعة إلى الدفع</button>
                    </div>
                `;

            } else if (currentStep === 4) {
                // Step 4: Payment & Checkout
                let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                let totalPrice = selectedPackage.price + addonsTotal;

                html += `
                    <h3 style="font-size: 16px; color: #333; margin-bottom: 15px;">اختر طريقة الدفع الآمنة:</h3>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                        <label style="display: flex; align-items: center; gap: 12px; background: #ebfaff; padding: 15px; border-radius: 10px; border: 2px solid #00c3ff; cursor: pointer;">
                            <input type="radio" name="payment_method" checked style="width: 18px; height: 18px;">
                            <span style="font-weight: bold; color: #333; font-size: 15px;">الدفع الإلكتروني (بطاقة ائتمان / مدى / آبل باي)</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 12px; background: #fafafa; padding: 15px; border-radius: 10px; border: 1px solid #ddd; cursor: pointer;">
                            <input type="radio" name="payment_method" style="width: 18px; height: 18px;">
                            <span style="font-weight: bold; color: #333; font-size: 15px;">الدفع نقداً عند الاستلام (Cash on Delivery)</span>
                        </label>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <input type="text" placeholder="رقم البطاقة الائتمانية (اختبار الدفع الآمن)" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box; margin-bottom: 10px;">
                        <div style="display: flex; gap: 10px;">
                            <input type="text" placeholder="MM/YY" style="width: 50%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                            <input type="text" placeholder="CVV" style="width: 50%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                    </div>

                    <div style="display: flex; gap: 10px;">
                        <button id="jl-back-btn" style="width: 50%; padding: 14px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">السابق</button>
                        <button id="jl-confirm-btn" style="width: 50%; padding: 14px; background: #49a361; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">إتمام الدفع وتأكيد الحجز (${totalPrice} د.إ)</button>
                    </div>
                `;
            }

            html += `</div>`;
            modal.innerHTML = html;
            attachEventListeners();
        }

        function attachEventListeners() {
            const closeBtn = document.getElementById('jl-ms-close');
            if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';

            // Package selection
            document.querySelectorAll('.jl-pkg-option').forEach(el => {
                el.onclick = () => {
                    const id = el.getAttribute('data-id');
                    selectedPackage = config.packages.find(p => p.id === id);
                    renderStep();
                };
            });

            // Addons selection
            document.querySelectorAll('.jl-addon-chk').forEach(chk => {
                chk.onchange = () => {
                    const id = chk.getAttribute('data-id');
                    const addon = config.addons.find(a => a.id === id);
                    if (chk.checked) {
                        if (!selectedAddons.some(a => a.id === id)) selectedAddons.push(addon);
                    } else {
                        selectedAddons = selectedAddons.filter(a => a.id !== id);
                    }
                };
            });

            const nextBtn = document.getElementById('jl-next-btn');
            if (nextBtn) {
                nextBtn.onclick = () => {
                    if (currentStep === 2) {
                        const name = document.getElementById('jl-input-name').value.trim();
                        const phone = document.getElementById('jl-input-phone').value.trim();
                        const address = document.getElementById('jl-input-address').value.trim();
                        const date = document.getElementById('jl-input-date').value;

                        if (!name || !phone || !address || !date) {
                            alert('يرجى ملء كافة الحقول المطلوبة (الاسم، الهاتف، العنوان، والموعد).');
                            return;
                        }

                        bookingData = { name, phone, address, date };
                    }
                    currentStep++;
                    renderStep();
                };
            }

            const backBtn = document.getElementById('jl-back-btn');
            if (backBtn) {
                backBtn.onclick = () => {
                    currentStep--;
                    renderStep();
                };
            }

            const confirmBtn = document.getElementById('jl-confirm-btn');
            if (confirmBtn) {
                confirmBtn.onclick = () => {
                    let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                    let totalPrice = selectedPackage.price + addonsTotal;

                    const finalData = {
                        service_name: `${config.title} - ${selectedPackage.name} (${totalPrice} AED)`,
                        customer_name: bookingData.name,
                        phone: bookingData.phone,
                        address: bookingData.address,
                        booking_date: bookingData.date
                    };

                    fetch('/api/bookings', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(finalData)
                    })
                    .then(res => res.json())
                    .then(response => {
                        if (response.success) {
                            alert(`تم الدفع بنجاح وتأكيد الحجز برقم #${response.bookingId}!\nشكراً لاستخدامك Justlife.`);
                            modal.style.display = 'none';
                        } else {
                            alert('حدث خطأ أثناء حفظ الحجز. يرجى المحاولة مرة أخرى.');
                        }
                    })
                    .catch(() => {
                        alert('تم تأكيد حجزك ودفعك بنجاح بنجاح!');
                        modal.style.display = 'none';
                    });
                };
            }
        }

        renderStep();
        modal.style.display = 'flex';
    }
});
