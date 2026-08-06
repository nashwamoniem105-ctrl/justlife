document.addEventListener('DOMContentLoaded', () => {
    const uaeLocations = [
        "دبي (Dubai)",
        "الشارقة (Sharjah)",
        "أبوظبي (Abu Dhabi)",
        "عجمان (Ajman)",
        "رأس الخيمة (Ras Al Khaimah)",
        "أم القيوين (Umm Al Quwain)",
        "الفجيرة (Fujairah)",
        "العين (Al Ain)",
        "دبي مارينا (Dubai Marina)",
        "داون تاون دبي (Downtown Dubai)",
        "نخلة جوميراه (Palm Jumeirah)",
        "البرشاء (Al Barsha)",
        "مردف (Mirdif)",
        "مجاز الشارقة (Al Majaz, Sharjah)",
        "الممزور (Al Mamzar)",
        "الخان الشارقة (Al Khan, Sharjah)"
    ];

    // Listen for inputs and search fields
    document.addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT' && (e.target.placeholder.includes('موقع') || e.target.placeholder.includes('مكان') || e.target.placeholder.includes('Location') || e.target.placeholder.includes('Where') || e.target.placeholder.includes('بحث') || e.target.className.includes('search'))) {
            const input = e.target;
            let dropdown = document.getElementById('smart-location-dropdown');
            
            if (!dropdown) {
                dropdown = document.createElement('div');
                dropdown.id = 'smart-location-dropdown';
                dropdown.style.cssText = 'position: absolute; background: white; border: 1px solid #ccc; max-height: 200px; overflow-y: auto; z-index: 99999; width: ' + input.offsetWidth + 'px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 4px;';
                input.parentNode.style.position = 'relative';
                input.parentNode.appendChild(dropdown);
            }

            const val = input.value.trim().toLowerCase();
            dropdown.innerHTML = '';
            
            if (val.length > 0) {
                const filtered = uaeLocations.filter(loc => loc.toLowerCase().includes(val));
                if (filtered.length > 0) {
                    filtered.forEach(item => {
                        const div = document.createElement('div');
                        div.style.cssText = 'padding: 10px; cursor: pointer; border-bottom: 1px solid #eee; font-family: Tahoma, sans-serif; font-size: 14px;';
                        div.textContent = item;
                        div.onmouseover = () => div.style.background = '#f0f0f0';
                        div.onmouseout = () => div.style.background = 'white';
                        div.onclick = () => {
                            input.value = item;
                            dropdown.innerHTML = '';
                            input.dispatchEvent(new Event('input', { bubbles: true }));
                            input.dispatchEvent(new Event('change', { bubbles: true }));
                        };
                        dropdown.appendChild(div);
                    });
                    dropdown.style.display = 'block';
                } else {
                    dropdown.style.display = 'none';
                }
            } else {
                dropdown.style.display = 'none';
            }
        }
    });

    // Handle GPS geolocation button clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('button') || e.target.tagName === 'BUTTON' || e.target.className.includes('gps') || e.target.className.includes('locate') || e.target.innerHTML.includes('موقعي') || e.target.innerHTML.includes('Current Location')) {
            const btn = e.target.closest('button') || e.target;
            if (navigator.geolocation) {
                btn.classList.add('is-loading');
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        btn.classList.remove('is-loading');
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        alert(`تم تحديد موقعك بنجاح! \nخط العرض: ${lat.toFixed(4)}\nخط الطول: ${lng.toFixed(4)}\nجاري عرض الخدمات المتاحة في منطقتك.`);
                        // Find any location input and set it
                        const inputs = document.querySelectorAll('input');
                        inputs.forEach(inp => {
                            if (inp.placeholder.includes('موقع') || inp.placeholder.includes('Location') || inp.placeholder.includes('مكان')) {
                                inp.value = "موقعي الحالي (GPS Detected)";
                            }
                        });
                    },
                    (error) => {
                        btn.classList.remove('is-loading');
                        alert('تعذر تحديد الموقع تلقائياً. يرجى اختيار المدينة يدوياً من القائمة.');
                    },
                    { timeout: 10000 }
                );
            }
        }
    });
});
