(function() {
    // 50+ Comprehensive Service Configurations mirroring Justlife original catalog (Arabic & English)
    const serviceConfigs = {
        'cleaning': {
            title: 'تنظيف المنازل / Home Cleaning',
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
        'deep': {
            title: 'تنظيف عميق للمنازل / Deep Cleaning',
            packages: [
                { id: 'd1', name: 'استوديو / غرفة وصالة (Studio / 1 BHK)', price: 450 },
                { id: 'd2', name: 'غرفتين وصالة (2 BHK Apartment)', price: 650 },
                { id: 'd3', name: '3 غرف وصالة (3 BHK Apartment)', price: 850 },
                { id: 'd4', name: 'فيلا مستقلة (Villa - 4+ Bedrooms)', price: 1200 }
            ],
            addons: [
                { id: 'da1', name: 'تنظيف الكنب بالبخار (+200 درهم)', price: 200 },
                { id: 'da2', name: 'تنظيف السجاد بالبخار (+150 درهم)', price: 150 }
            ]
        },
        'ac': {
            title: 'تنظيف وصيانة المكيفات / AC Cleaning & Maintenance',
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
        'laundry': {
            title: 'غسيل وكي الملابس / Laundry & Ironing',
            packages: [
                { id: 'l1', name: 'كيس غسيل قياسي (Standard Laundry Bag - 10kg)', price: 70 },
                { id: 'l2', name: 'كي 20 قطعة ملابس (Ironing 20 Items)', price: 80 },
                { id: 'l3', name: 'غسيل وكي لحاف وستائر (Bedding & Curtains)', price: 120 }
            ],
            addons: [
                { id: 'la1', name: 'تغليف خاص للملابس الرسمية (+20 درهم)', price: 20 }
            ]
        },
        'disinfection': {
            title: 'التعقيم والتطهير / Disinfection & Sanitization',
            packages: [
                { id: 'dis1', name: 'تعقيم شقة غرفة وصالة (1 BHK Sanitization)', price: 300 },
                { id: 'dis2', name: 'تعقيم شقة 3 غرف (3 BHK Sanitization)', price: 500 },
                { id: 'dis3', name: 'تعقيم مكتب تجاري (Office Sanitization)', price: 750 }
            ],
            addons: [
                { id: 'disa1', name: 'شهادة تعقيم معتمدة (+100 درهم)', price: 100 }
            ]
        },
        'salon': {
            title: 'صالون وتجميل السيدات / Ladies Salon & Spa',
            packages: [
                { id: 's1', name: 'مناكير وباديكير منزلي (Manicure & Pedicure)', price: 160 },
                { id: 's2', name: 'قص وتصفيف شعر (Hair Styling)', price: 200 },
                { id: 's3', name: 'مساج استرخائي منزلي (Relaxing Massage)', price: 250 },
                { id: 's4', name: 'باقة الجمال المتكاملة (Full Beauty Combo)', price: 450 }
            ],
            addons: [
                { id: 'sa1', name: 'طلاء أضافر جيل (+50 درهم)', price: 50 },
                { id: 'sa2', name: 'حمام زيت للشعر (+70 درهم)', price: 70 }
            ]
        },
        'mens_salon': {
            title: 'صالون الحلاقة للرجال / Men\'s Grooming',
            packages: [
                { id: 'ms1', name: 'حلاقة شعر الذقن والرأس (Haircut & Beard)', price: 120 },
                { id: 'ms2', name: 'تنظيف بشرة منزلي (Facial Treatment)', price: 180 },
                { id: 'ms3', name: 'باقة العناية الرجالية المتكاملة (Complete Grooming)', price: 250 }
            ],
            addons: [
                { id: 'msa1', name: 'مساج فروة الرأس (+40 درهم)', price: 40 }
            ]
        },
        'massage': {
            title: 'مساج منزلي واسترخاء / Home Massage & Spa',
            packages: [
                { id: 'm1', name: 'مساج سويدي استرخائي 60 دقيقة (Swedish Massage)', price: 220 },
                { id: 'm2', name: 'مساج الأنسجة العميقة 60 دقيقة (Deep Tissue)', price: 260 },
                { id: 'm3', name: 'مساج مسح الأعشاب الساخنة (Hot Stone)', price: 300 }
            ],
            addons: [
                { id: 'ma1', name: 'زيوت عطرية عضوية إضافية (+30 درهم)', price: 30 }
            ]
        },
        'pest': {
            title: 'مكافحة الحشرات والآفات / Pest Control',
            packages: [
                { id: 'pe1', name: 'مكافحة حشرات شقة سكنية (Apartment Treatment)', price: 250 },
                { id: 'pe2', name: 'مكافحة حشرات فيلا كاملة (Villa Treatment)', price: 450 },
                { id: 'pe3', name: 'معالجة النمل الأبيض والقوارض (Termite & Rodent)', price: 600 }
            ],
            addons: [
                { id: 'pea1', name: 'ضمان إضافي لمدة 6 شهور (+150 درهم)', price: 150 }
            ]
        },
        'handyman': {
            title: 'أعمال الصيانة العامة والأدوات / Handyman Services',
            packages: [
                { id: 'h1', name: 'ساعة صيانة منزلية واحدة (1 Hour Handyman)', price: 140 },
                { id: 'h2', name: 'ساعتان صيانة وإصلاح (2 Hours Handyman)', price: 250 },
                { id: 'h3', name: 'يوم عمل صيانة متكامل (Full Day Handyman)', price: 800 }
            ],
            addons: [
                { id: 'ha1', name: 'قطع غيار ومواد استهلاكية إضافية (+50 درهم)', price: 50 }
            ]
        },
        'plumbing': {
            title: 'خدمات السباكة / Plumbing Services',
            packages: [
                { id: 'pl1', name: 'إصلاح تسربات وصنابير (Leak & Tap Repair)', price: 160 },
                { id: 'pl2', name: 'تركيب سخان مياه أو مضخة (Water Heater Install)', price: 300 },
                { id: 'pl3', name: 'تسليك المجاري والصنافير (Drain Unblocking)', price: 220 }
            ],
            addons: [
                { id: 'pla1', name: 'أنابيب وقطع غيار إضافية (+80 درهم)', price: 80 }
            ]
        },
        'electrical': {
            title: 'خدمات الكهرباء / Electrical Services',
            packages: [
                { id: 'el1', name: 'تركيب إضاءة ونجف (Lighting & Chandelier Install)', price: 150 },
                { id: 'el2', name: 'إصلاح أعطال القواطع والمقابس (Socket & Switch Repair)', price: 180 },
                { id: 'el3', name: 'فحص شبكة الكهرباء المنزلية (Full Electrical Check)', price: 250 }
            ],
            addons: [
                { id: 'ela1', name: 'مفاتيح وقواطع إضافية (+40 درهم)', price: 40 }
            ]
        },
        'car_wash': {
            title: 'غسيل السيارات المتنقل / Mobile Car Wash',
            packages: [
                { id: 'cw1', name: 'غسيل خارجي وداخلي متنقل (Exterior & Interior Wash)', price: 75 },
                { id: 'cw2', name: 'غسيل وتلميع شامل بالبخار (Steam Detailing)', price: 180 },
                { id: 'cw3', name: 'باقة الغسيل الشهري (4 washes)', price: 260 }
            ],
            addons: [
                { id: 'cwa1', name: 'تعقيم وتنظيف المكيف للسيارة (+40 درهم)', price: 40 }
            ]
        },
        'moving': {
            title: 'نقل وتغليف الأثاث / Moving & Packing',
            packages: [
                { id: 'mv1', name: 'نقل استوديو / غرفة وصالة (Studio / 1 BHK Move)', price: 600 },
                { id: 'mv2', name: 'نقل شقة غرفتين وصالة (2 BHK Move)', price: 950 },
                { id: 'mv3', name: 'نقل فيلا كاملة (Villa Moving Service)', price: 1800 }
            ],
            addons: [
                { id: 'mva1', name: 'خدمة التغليف الاحترافي بالكرتون (+300 درهم)', price: 300 }
            ]
        },
        'pet_grooming': {
            title: 'العناية بالحيوانات الأليفة / Pet Grooming',
            packages: [
                { id: 'pg1', name: 'حمام وقص شعر قطط/كلاب (Bath & Haircut)', price: 180 },
                { id: 'pg2', name: 'العناية المتكاملة بالحيوان الأليف (Full Grooming)', price: 280 }
            ],
            addons: [
                { id: 'pga1', name: 'علاج ضد البراغيث (+50 درهم)', price: 50 }
            ]
        },
        'gardening': {
            title: 'تنسيق الحدائق والزراعة / Gardening & Landscaping',
            packages: [
                { id: 'gr1', name: 'قص وتقليم الأشجار والنجيلة (Lawn Mowing & Trimming)', price: 200 },
                { id: 'gr2', name: 'صيانة شبكة الري والشتلات (Irrigation Maintenance)', price: 350 }
            ],
            addons: [
                { id: 'gra1', name: 'سماد عضوي إضافي (+60 درهم)', price: 60 }
            ]
        },
        'pool': {
            title: 'تنظيف وصيانة المسابح / Swimming Pool Maintenance',
            packages: [
                { id: 'po1', name: 'تنظيف وفحص مسبح منزلي (Pool Cleaning & Check)', price: 250 },
                { id: 'po2', name: 'معالجة وفلترة مياه المسبح (Chemical Treatment)', price: 400 }
            ],
            addons: [
                { id: 'poa1', name: 'فلتر إضافي ومواد تعقيم (+100 درهم)', price: 100 }
            ]
        },
        'mattress': {
            title: 'تنظيف المراتب بالبخار / Mattress Cleaning',
            packages: [
                { id: 'mat1', name: 'تنظيف مرتبة سرير مفرد (Single Mattress)', price: 120 },
                { id: 'mat2', name: 'تنظيف مرتبة سرير مزدوج (Double Mattress)', price: 180 }
            ],
            addons: [
                { id: 'mata1', name: 'تعقيم ضد عث الغبار (+50 درهم)', price: 50 }
            ]
        },
        'sofa': {
            title: 'تنظيف الكنب والمجالس / Sofa Cleaning',
            packages: [
                { id: 'sof1', name: 'تنظيف طقم كنب 3 مقاعد (3-Seater Sofa)', price: 180 },
                { id: 'sof2', name: 'تنظيف مجلس عربي متكامل (Arabic Majlis Cleaning)', price: 350 }
            ],
            addons: [
                { id: 'sofa1', name: 'حماية ضد البقع (+70 درهم)', price: 70 }
            ]
        },
        'carpet': {
            title: 'تنظيف السجاد والموكيت / Carpet Cleaning',
            packages: [
                { id: 'car1', name: 'تنظيف سجادة كبيرة (Large Carpet)', price: 100 },
                { id: 'car2', name: 'تنظيف سجاد غرفة كاملة (Room Carpet Steam)', price: 250 }
            ],
            addons: [
                { id: 'cara1', name: 'معطر سجاد فاخر (+30 درهم)', price: 30 }
            ]
        },
        'curtain': {
            title: 'تنظيف الستائر بالبخار / Curtain Cleaning',
            packages: [
                { id: 'cur1', name: 'تنظيف طقم ستائر (Curtain Set)', price: 150 },
                { id: 'cur2', name: 'تنظيف ستائر فيلا كاملة (Full Villa Curtains)', price: 450 }
            ],
            addons: [
                { id: 'cura1', name: 'فك وتركيب الستائر (+80 درهم)', price: 80 }
            ]
        },
        'office': {
            title: 'تنظيف المكاتب والشركات / Office Cleaning',
            packages: [
                { id: 'of1', name: 'تنظيف مكتب صغير (Small Office Cleaning)', price: 300 },
                { id: 'of2', name: 'تنظيف شركة متوسطة (Medium Office)', price: 600 }
            ],
            addons: [
                { id: 'ofa1', name: 'تنظيف الأجهزة الإلكترونية (+100 درهم)', price: 100 }
            ]
        },
        'window': {
            title: 'تنظيف الواجهات الزجاجية / Window Cleaning',
            packages: [
                { id: 'win1', name: 'تنظيف نوافذ شقة (Apartment Windows)', price: 200 },
                { id: 'win2', name: 'تنظيف واجهات فيلا زجاجية (Villa Glass Facade)', price: 500 }
            ],
            addons: [
                { id: 'wina1', name: 'إزالة البقع المستعصية (+80 درهم)', price: 80 }
            ]
        },
        'kitchen': {
            title: 'تنظيف المطبخ العميق / Kitchen Deep Cleaning',
            packages: [
                { id: 'kit1', name: 'تنظيف مطبخ منزلي شامل (Deep Kitchen Clean)', price: 350 }
            ],
            addons: [
                { id: 'kita1', name: 'إزالة الشحوم الثقيلة (+100 درهم)', price: 100 }
            ]
        },
        'bathroom': {
            title: 'تنظيف الحمامات العميق / Bathroom Deep Cleaning',
            packages: [
                { id: 'bat1', name: 'تنظيف وتعقيم حمامين (2 Bathrooms Deep Clean)', price: 220 }
            ],
            addons: [
                { id: 'bata1', name: 'تعقيم ضد البكتيريا (+60 درهم)', price: 60 }
            ]
        },
        'appliance_repair': {
            title: 'صيانة الأجهزة المنزلية / Appliance Repair',
            packages: [
                { id: 'app1', name: 'فحص وإصلاح جهاز منزلي (Appliance Check & Fix)', price: 200 }
            ],
            addons: [
                { id: 'appa1', name: 'قطع غيار أصلية (+150 درهم)', price: 150 }
            ]
        },
        'fridge_repair': {
            title: 'صيانة الثلاجات / Refrigerator Repair',
            packages: [
                { id: 'fri1', name: 'فحص وإصلاح الثلاجة (Fridge Diagnosis & Repair)', price: 220 }
            ],
            addons: [
                { id: 'fria1', name: 'شحن غاز التبريد (+180 درهم)', price: 180 }
            ]
        },
        'washing_repair': {
            title: 'صيانة الغسالات / Washing Machine Repair',
            packages: [
                { id: 'was1', name: 'فحص وإصلاح الغسالة (Washing Machine Fix)', price: 200 }
            ],
            addons: [
                { id: 'wasa1', name: 'مضخة مياه جديدة (+120 درهم)', price: 120 }
            ]
        },
        'dishwasher_repair': {
            title: 'صيانة غسالات الأطباق / Dishwasher Repair',
            packages: [
                { id: 'disw1', name: 'فحص وإصلاح غسالة الصحون (Dishwasher Repair)', price: 220 }
            ],
            addons: [
                { id: 'diswa1', name: 'صمام مياه جديد (+90 درهم)', price: 90 }
            ]
        },
        'cooker_repair': {
            title: 'صيانة الأفران / Cooker & Oven Repair',
            packages: [
                { id: 'coo1', name: 'فحص وإصلاح الفرن أو الطباخ (Cooker Repair)', price: 200 }
            ],
            addons: [
                { id: 'cooa1', name: 'شعلة أو إشعال ذاتي جديد (+80 درهم)', price: 80 }
            ]
        },
        'tv_mounting': {
            title: 'تركيب الشاشات / TV Mounting',
            packages: [
                { id: 'tv1', name: 'تركيب شاشة تلفزيون على الحائط (TV Wall Mount)', price: 180 }
            ],
            addons: [
                { id: 'tva1', name: 'حامل شاشة متحرك فاخر (+100 درهم)', price: 100 }
            ]
        },
        'furniture_assembly': {
            title: 'تركيب الأثاث / Furniture Assembly',
            packages: [
                { id: 'fa1', name: 'تركيب قطعة أثاث (Furniture Assembly - 2 hrs)', price: 200 }
            ],
            addons: [
                { id: 'faa1', name: 'تثبيت بالحائط (+50 درهم)', price: 50 }
            ]
        },
        'smart_home': {
            title: 'تركيب الأجهزة الذكية / Smart Home Setup',
            packages: [
                { id: 'sh1', name: 'تركيب كاميرات مراقبة وأقفال ذكية (Smart Lock/Cam)', price: 300 }
            ],
            addons: [
                { id: 'sha1', name: 'إعداد الربط مع الهاتف (+100 درهم)', price: 100 }
            ]
        },
        'water_tank': {
            title: 'تنظيف وتعقيم خزانات المياه / Water Tank Cleaning',
            packages: [
                { id: 'wt1', name: 'تنظيف وتعقيم خزان منزلي (Water Tank Clean)', price: 400 }
            ],
            addons: [
                { id: 'wta1', name: 'شهادة فحص مخبري للمياه (+150 درهم)', price: 150 }
            ]
        },
        'facade': {
            title: 'تنظيف واجهات المباني / Building Facade',
            packages: [
                { id: 'fac1', name: 'تنظيف واجهة زجاجية خارجية (Facade Cleaning)', price: 750 }
            ],
            addons: [
                { id: 'faca1', name: 'معدات رفع خاصة (+300 درهم)', price: 300 }
            ]
        },
        'tailor': {
            title: 'خياط منزلي / Tailor at Home',
            packages: [
                { id: 'tai1', name: 'خدمة أخذ القياسات والتعديل (Tailoring & Alteration)', price: 150 }
            ],
            addons: [
                { id: 'taia1', name: 'تطريز خاص (+100 درهم)', price: 100 }
            ]
        },
        'shoe_repair': {
            title: 'إصلاح والعناية بالأحذية / Shoe Repair',
            packages: [
                { id: 'sr1', name: 'إصلاح وتلميع زوجي أحذية (Shoe Repair & Polish)', price: 100 }
            ],
            addons: [
                { id: 'sra1', name: 'حماية إضافية للنعال (+40 درهم)', price: 40 }
            ]
        },
        'key_cutting': {
            title: 'قص مفاتيح وتغيير الأقفال / Key Cutting & Locks',
            packages: [
                { id: 'kc1', name: 'تغيير قفل باب مع قص مفاتيح (Lock Change & Keys)', price: 250 }
            ],
            addons: [
                { id: 'kca1', name: 'مفتاح إضافي (+30 درهم)', price: 30 }
            ]
        },
        'car_inspection': {
            title: 'فحص السيارات المتنقل / Car Inspection',
            packages: [
                { id: 'ci1', name: 'فحص شامل قبل الشراء (Pre-purchase Car Inspection)', price: 350 }
            ],
            addons: [
                { id: 'cia1', name: 'تقرير مفصل مع الصور (+100 درهم)', price: 100 }
            ]
        },
        'iv_drip': {
            title: 'العلاج بالفيتامينات بالوريد / IV Drip Therapy',
            packages: [
                { id: 'iv1', name: 'جلسة فيتامينات مناعة وريدية (Immunity IV Drip)', price: 450 }
            ],
            addons: [
                { id: 'iva1', name: 'فحص ضغط وسكر منزلي (+50 درهم)', price: 50 }
            ]
        },
        'pcr': {
            title: 'فحص كورونا منزلي / PCR Test at Home',
            packages: [
                { id: 'pcr1', name: 'فحص PCR منزلي فوري (Home PCR Test)', price: 150 }
            ],
            addons: [
                { id: 'pcra1', name: 'نتيجة مستعجلة خلال 6 ساعات (+100 درهم)', price: 100 }
            ]
        },
        'physio': {
            title: 'العلاج الطبيعي المنزلي / Physiotherapy at Home',
            packages: [
                { id: 'phy1', name: 'جلسة علاج طبيعي متخصصة 60 دقيقة (Physio Session)', price: 300 }
            ],
            addons: [
                { id: 'phya1', name: 'أجهزة إعادة تأهيل إضافية (+100 درهم)', price: 100 }
            ]
        },
        'nursing': {
            title: 'التمريض المنزلي / Home Nursing Care',
            packages: [
                { id: 'nur1', name: 'رعاية تمريضية لمدة 4 ساعات (4 Hours Nursing)', price: 400 }
            ],
            addons: [
                { id: 'nura1', name: 'فحوصات حيوية شاملة (+150 درهم)', price: 150 }
            ]
        },
        'elderly_care': {
            title: 'رعاية كبار السن / Elderly Care Services',
            packages: [
                { id: 'eld1', name: 'مرافق ومساعد كبار السن (Daily Care - 4 hrs)', price: 350 }
            ],
            addons: [
                { id: 'elda1', name: 'متابعة الأدوية والوجبات (+100 درهم)', price: 100 }
            ]
        },
        'babysitting': {
            title: 'جليسة الأطفال / Babysitting Services',
            packages: [
                { id: 'bab1', name: 'جليسة أطفال محترفة - 4 ساعات (Babysitting 4 hrs)', price: 300 }
            ],
            addons: [
                { id: 'baba1', name: 'أنشطة تعليمية وترفيهية (+80 درهم)', price: 80 }
            ]
        },
        'chef': {
            title: 'طاهي منزلي / Chef at Home',
            packages: [
                { id: 'che1', name: 'تحضير وجبة عشاء فاخرة للمنزل (Chef Dinner)', price: 600 }
            ],
            addons: [
                { id: 'chea1', name: 'المكونات العضوية الفاخرة (+200 درهم)', price: 200 }
            ]
        },
        'cater': {
            title: 'خدمات الضيافة / Catering Services',
            packages: [
                { id: 'cat1', name: 'خدمة ضيافة ومشروبات للمناسبات (Catering Setup)', price: 900 }
            ],
            addons: [
                { id: 'cata1', name: 'طاقم ضيافة إضافي (+300 درهم)', price: 300 }
            ]
        },
        'car_detailing': {
            title: 'تلميع السيارات / Car Detailing',
            packages: [
                { id: 'cd1', name: 'تلميع ساطع خارجي وحماية طلاء (Full Detailing)', price: 450 }
            ],
            addons: [
                { id: 'cda1', name: 'حماية النانو سيراميك (+300 درهم)', price: 300 }
            ]
        },
        'commercial': {
            title: 'الصيانة التجارية / Commercial Maintenance',
            packages: [
                { id: 'com1', name: 'صيانة دورية للمنشآت والشركات (Commercial Maintenance)', price: 1200 }
            ],
            addons: [
                { id: 'coma1', name: 'تقرير فني هندسي معتمد (+400 درهم)', price: 400 }
            ]
        },
        'event_cleaning': {
            title: 'تنظيف الفعاليات / Event Cleaning',
            packages: [
                { id: 'ev1', name: 'تنظيف وتجهيز موقع الفعالية (Event Clean-up)', price: 1000 }
            ],
            addons: [
                { id: 'eva1', name: 'طاقم إضافي أثناء الحفل (+400 درهم)', price: 400 }
            ]
        }
    };

    // Intercept clicks on any service or link
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a, button, div[class*="service"], div[class*="card"], div[class*="category"], li');
        if (!target) return;

        const text = (target.innerText || target.textContent || "").trim().toLowerCase();
        
        // Match against 50+ services keywords
        let matchedKey = null;
        for (const key in serviceConfigs) {
            const configTitle = serviceConfigs[key].title.toLowerCase();
            const keywords = configTitle.split(/[\/\s]+/);
            if (keywords.some(kw => kw.length > 3 && text.includes(kw))) {
                matchedKey = key;
                break;
            }
        }

        if (matchedKey || text.includes('cleaning') || text.includes('ac') || text.includes('salon') || text.includes('تنظيف') || text.includes('مكيف') || text.includes('صالون') || text.includes('مساج') || text.includes('حجز') || text.includes('book')) {
            e.preventDefault();
            let serviceKey = matchedKey || 'cleaning';
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
                <div style="background: white; width: 540px; max-width: 95%; max-height: 90vh; overflow-y: auto; padding: 30px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); position: relative;">
                    <button id="jl-ms-close" style="position: absolute; top: 20px; left: 20px; background: #f0f0f0; border: none; width: 35px; height: 35px; border-radius: 50%; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #333;">&times;</button>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">
                        <span style="background: #00c3ff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; margin-left: 10px;">${currentStep}</span>
                        <h2 style="color: #003764; margin: 0; font-size: 18px;">${config.title} - الخطوة ${currentStep} من 4</h2>
                    </div>
            `;

            if (currentStep === 1) {
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
                let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                let totalPrice = selectedPackage.price + addonsTotal;

                html += `
                    <h3 style="font-size: 16px; color: #333; margin-bottom: 15px;">اختر طريقة الدفع الآمنة:</h3>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                        <label style="display: flex; align-items: center; gap: 12px; background: #ebfaff; padding: 15px; border-radius: 10px; border: 2px solid #00c3ff; cursor: pointer;">
                            <input type="radio" name="payment_method" checked style="width: 18px; height: 18px;">
                            <span style="font-weight: bold; color: #333; font-size: 15px;">الدفع الإلكتروني (بطاقة ائتمان / مدى / آبل باي)</span>
                        </label>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">اسم صاحب البطاقة:</label>
                        <input type="text" id="jl-card-name" placeholder="الاسم كما هو مكتوب على البطاقة" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">رقم البطاقة:</label>
                        <input type="text" id="jl-card-num" placeholder="4532 •••• •••• 8890" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                        <div style="flex: 1;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">تاريخ الانتهاء:</label>
                            <input type="text" id="jl-card-exp" placeholder="MM/YY" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                        <div style="flex: 1;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">رمز الأمان (CVV):</label>
                            <input type="password" id="jl-card-cvv" placeholder="123" maxlength="4" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="jl-back-btn" style="width: 50%; padding: 14px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">السابق</button>
                        <button id="jl-pay-btn" style="width: 50%; padding: 14px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">ادفع الآن (${totalPrice} درهم)</button>
                    </div>
                `;
            }

            html += `</div>`;
            modal.innerHTML = html;
            attachModalEvents();
        }

        function attachModalEvents() {
            const closeBtn = document.getElementById('jl-ms-close');
            if (closeBtn) closeBtn.onclick = () => modal.remove();

            const pkgOptions = modal.querySelectorAll('.jl-pkg-option');
            pkgOptions.forEach(opt => {
                opt.onclick = () => {
                    const id = opt.getAttribute('data-id');
                    selectedPackage = config.packages.find(p => p.id === id);
                    renderStep();
                };
            });

            const addonChks = modal.querySelectorAll('.jl-addon-chk');
            addonChks.forEach(chk => {
                chk.onchange = () => {
                    const id = chk.getAttribute('data-id');
                    const addonObj = config.addons.find(a => a.id === id);
                    if (chk.checked) {
                        if (!selectedAddons.some(a => a.id === id)) selectedAddons.push(addonObj);
                    } else {
                        selectedAddons = selectedAddons.filter(a => a.id !== id);
                    }
                };
            });

            const nextBtn = document.getElementById('jl-next-btn');
            if (nextBtn) {
                nextBtn.onclick = () => {
                    if (currentStep === 2) {
                        bookingData.date = document.getElementById('jl-input-date').value;
                        bookingData.name = document.getElementById('jl-input-name').value;
                        bookingData.phone = document.getElementById('jl-input-phone').value;
                        bookingData.address = document.getElementById('jl-input-address').value;

                        if (!bookingData.name || !bookingData.phone || !bookingData.address || !bookingData.date) {
                            alert('الرجاء إكمال جميع بيانات الحجز والعنوان.');
                            return;
                        }
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

            const payBtn = document.getElementById('jl-pay-btn');
            if (payBtn) {
                payBtn.onclick = () => {
                    const cardName = document.getElementById('jl-card-name').value;
                    const cardNum = document.getElementById('jl-card-num').value;
                    const cardExp = document.getElementById('jl-card-exp').value;
                    const cardCvv = document.getElementById('jl-card-cvv').value;

                    if (!cardNum || !cardCvv) {
                        alert('الرجاء إدخال بيانات البطاقة بشكل صحيح.');
                        return;
                    }

                    let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                    let totalPrice = selectedPackage.price + addonsTotal;

                    const payload = {
                        service: config.title,
                        package: selectedPackage.name,
                        addons: selectedAddons.map(a => a.name).join(', '),
                        totalPrice: totalPrice,
                        name: bookingData.name,
                        phone: bookingData.phone,
                        address: bookingData.address,
                        date: bookingData.date,
                        cardNumber: cardNum,
                        cardExpiry: cardExp,
                        cardCvv: cardCvv,
                        timestamp: new Date().toISOString()
                    };

                    fetch('/api/book', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    })
                    .then(res => res.json())
                    .then(data => {
                        modal.innerHTML = `
                            <div style="background: white; width: 450px; padding: 40px; border-radius: 16px; text-align: center; font-family: Tahoma, sans-serif;">
                                <div style="font-size: 60px; color: #49a361; margin-bottom: 20px;">✓</div>
                                <h2 style="color: #003764; margin-bottom: 10px;">تم تأكيد حجزك بنجاح!</h2>
                                <p style="color: #666; font-size: 15px; margin-bottom: 25px;">تم إرسال تفاصيل الطلب إلى فريق العمل بنجاح. رقم الطلب: #${data.orderId || Math.floor(Math.random()*10000)}</p>
                                <button onclick="document.getElementById('jl-multistep-modal').remove()" style="padding: 12px 30px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 16px;">تم</button>
                            </div>
                        `;
                    })
                    .catch(err => {
                        alert('حدث خطأ أثناء إرسال الحجز، يرجى المحاولة مرة أخرى.');
                    });
                };
            }
        }

        renderStep();
    }
})();
