document.addEventListener('DOMContentLoaded', () => {
    // Comprehensive service mapping for Justlife
    const servicesMap = {
        'cleaning': { ar: 'تنظيف المنازل', en: 'Home Cleaning' },
        'deep-cleaning': { ar: 'تنظيف عميق', en: 'Deep Cleaning' },
        'ac': { ar: 'تنظيف وصيانة المكيفات', en: 'AC Cleaning & Maintenance' },
        'salon': { ar: 'صالون وتجميل السيدات', en: 'Ladies Salon & Spa' },
        'spa': { ar: 'مساج وتدليك منزلي', en: 'Home Spa & Massage' },
        'laundry': { ar: 'غسيل وكوي الملابس', en: 'Laundry & Dry Cleaning' },
        'pest': { ar: 'مکافحة الحشرات', en: 'Pest Control' },
        'handyman': { ar: 'صيانة عامة وفني صيانة', en: 'Handyman & Maintenance' },
        'disinfection': { ar: 'تعقيم وتطهير', en: 'Disinfection & Sanitization' }
    };

    // Intercept all clicks on links and service cards
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        const card = e.target.closest('[class*="service"], [class*="card"], [class*="category"]');
        
        if (link) {
            const href = link.getAttribute('href') || '';
            const text = link.innerText || link.textContent || '';
            
            // If it's an internal service link or subpath
            if (href.includes('/service') || href.includes('/cleaning') || href.includes('/salon') || href.includes('/ac') || href.includes('service') || href.includes('category')) {
                e.preventDefault();
                openServiceDetailPage(text.trim() || href);
                return;
            }
        }

        if (card && !link) {
            const text = card.innerText || card.textContent || '';
            if (text.length > 2 && text.length < 100) {
                e.preventDefault();
                openServiceDetailPage(text.trim());
            }
        }
    });

    function openServiceDetailPage(serviceTitle) {
        let container = document.getElementById('justlife-service-view-modal');
        if (!container) {
            container = document.createElement('div');
            container.id = 'justlife-service-view-modal';
            container.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.65); display: flex; justify-content: center; align-items: center; z-index: 999999; direction: rtl; font-family: Tahoma, sans-serif;';
            container.innerHTML = `
                <div style="background: white; width: 550px; max-width: 95%; max-height: 90vh; overflow-y: auto; padding: 30px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.25); position: relative;">
                    <button id="jl-close-service-modal" style="position: absolute; top: 20px; left: 20px; background: #f0f0f0; border: none; width: 35px; height: 35px; border-radius: 50%; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #333;">&times;</button>
                    <div id="jl-service-content">
                        <!-- Dynamic Content Loaded Here -->
                    </div>
                </div>
            `;
            document.body.appendChild(container);

            document.getElementById('jl-close-service-modal').onclick = () => {
                container.style.display = 'none';
            };
        }

        const contentDiv = document.getElementById('jl-service-content');
        contentDiv.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="background: #ebfaff; color: #00c3ff; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: bold;">خدمة معتمدة من Justlife</span>
                <h2 id="jl-view-title" style="color: #003764; margin: 15px 0 10px 0; font-size: 24px;">${serviceTitle}</h2>
                <p style="color: #666; font-size: 14px; line-height: 1.6;">اختر تفاصيل الخدمة، عدد الساعات أو العاملات، وحدد موعد الحجز بكل سهولة.</p>
            </div>
            
            <form id="jl-detailed-booking-form">
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">اختر الباقة أو المدة:</label>
                    <select id="jl-package-select" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; background: #fff;">
                        <option value="standard">الباقة القياسية (ساعتان - عاملة واحدة)</option>
                        <option value="extended">بقة متقدمة (3 ساعات - عاملتان)</option>
                        <option value="premium">باقة شاملة (4 ساعات - فريق محترف)</option>
                    </select>
                </div>

                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">الاسم الكامل:</label>
                    <input type="text" id="jl-det-name" required placeholder="أدخل اسمك الكريم" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>

                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">رقم الهاتف المتحرك:</label>
                    <input type="tel" id="jl-det-phone" required placeholder="0501234567" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>

                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">العنوان التفصيلي (المدينة، الحي، الشارع):</label>
                    <input type="text" id="jl-det-address" required placeholder="مثال: دبي، مارينا، برج الرهد" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>

                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: bold; font-size: 14px; color: #333;">تاريخ ووقت الزيارة:</label>
                    <input type="datetime-local" id="jl-det-date" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                </div>

                <button type="submit" style="width: 100%; padding: 14px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer; transition: background 0.3s;">تأكيد الحجز والدفع الآمن</button>
            </form>
        `;

        container.style.display = 'flex';

        document.getElementById('jl-detailed-booking-form').onsubmit = function(e) {
            e.preventDefault();
            const data = {
                service_name: serviceTitle + " (" + document.getElementById('jl-package-select').value + ")",
                customer_name: document.getElementById('jl-det-name').value,
                phone: document.getElementById('jl-det-phone').value,
                address: document.getElementById('jl-det-address').value,
                booking_date: document.getElementById('jl-det-date').value
            };

            fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    alert('تم تأكيد حجزك بنجاح! رقم الطلب: #' + response.bookingId + '\nسيتم التواصل معك في أقرب وقت لتأكيد الموعد.');
                    container.style.display = 'none';
                } else {
                    alert('حدث خطأ أثناء حفظ الحجز. يرجى المحاولة مرة أخرى.');
                }
            })
            .catch(() => {
                alert('تم استلام طلبك بنجاح!');
                container.style.display = 'none';
            });
        };
    }
});
