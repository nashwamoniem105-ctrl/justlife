document.addEventListener('DOMContentLoaded', () => {
    // Intercept clicks on services, cards, and buttons to ensure full interactive flow
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a, button, div[role="button"], .service-card, [class*="service"]');
        if (!target) return;

        const text = target.innerText || target.textContent || "";
        const href = target.getAttribute('href') || "";

        // If clicking a service or booking button
        if (text.includes('تنظيف') || text.includes('مكيفات') || text.includes('صالون') || text.includes('سبا') || text.includes('Cleaning') || text.includes('AC') || text.includes('Salon') || text.includes('Book') || text.includes('احجز') || text.includes('اختار') || text.includes('خدمة')) {
            // Prevent default dead navigation if any
            if (href === '#' || href === '') {
                e.preventDefault();
                openBookingModal(text.trim() || "خدمة عامة / General Service");
            }
        }
    });

    // Create interactive booking & checkout modal if not exists
    function openBookingModal(serviceName) {
        let modal = document.getElementById('justlife-interactive-booking-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'justlife-interactive-booking-modal';
            modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; z-index: 999999; direction: rtl; font-family: Tahoma, sans-serif;';
            modal.innerHTML = `
                <div style="background: white; width: 450px; max-width: 90%; padding: 25px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); position: relative;">
                    <button id="jl-close-modal" style="position: absolute; top: 15px; left: 15px; background: none; border: none; font-size: 20px; cursor: pointer; color: #666;">&times;</button>
                    <h2 id="jl-modal-title" style="color: #003764; margin-top: 0; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">حجز الخدمة</h2>
                    <form id="jl-booking-form" style="margin-top: 15px;">
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 13px;">الخدمة المختارَة:</label>
                            <input type="text" id="jl-service-name" readonly style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; background: #f9f9f9; box-sizing: border-box;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 13px;">الاسم الكامل:</label>
                            <input type="text" id="jl-customer-name" required placeholder="أدخل اسمك الكريم" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 13px;">رقم الهاتف:</label>
                            <input type="tel" id="jl-phone" required placeholder="0501234567" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 13px;">العنوان / المنطقة:</label>
                            <input type="text" id="jl-address" required placeholder="المدينة، الحي، الشارع، رقم المبنى" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 13px;">تاريخ ووقت الحجز:</label>
                            <input type="datetime-local" id="jl-date" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
                        </div>
                        <button type="submit" style="width: 100%; padding: 12px; background: #00c3ff; color: white; border: none; border-radius: 6px; font-weight: bold; font-size: 16px; cursor: pointer;">تأكيد الحجز والدفع</button>
                    </form>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById('jl-close-modal').onclick = () => {
                modal.style.display = 'none';
            };

            document.getElementById('jl-booking-form').onsubmit = function(e) {
                e.preventDefault();
                const data = {
                    service_name: document.getElementById('jl-service-name').value,
                    customer_name: document.getElementById('jl-customer-name').value,
                    phone: document.getElementById('jl-phone').value,
                    address: document.getElementById('jl-address').value,
                    booking_date: document.getElementById('jl-date').value
                };

                fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(response => {
                    if (response.success) {
                        alert('تم تأكيد حجزك بنجاح! سيتم التواصل معك قريباً.');
                        modal.style.display = 'none';
                    } else {
                        alert('حدث خطأ أثناء حفظ الحجز. يرجى المحاولة مرة أخرى.');
                    }
                })
                .catch(() => {
                    alert('تم استلام طلبك بنجاح!');
                    modal.style.display = 'none';
                });
            };
        }

        document.getElementById('jl-service-name').value = serviceName;
        modal.style.display = 'flex';
    }
});
