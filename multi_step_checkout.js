(function() {
    // Complete 50+ Detailed Service Configs mirroring Justlife's exact multi-page flow
    const servicesMap = {
        'cleaning': {
            ar: 'تنظيف المنازل', en: 'Home Cleaning',
            packages: [
                { id: 'c1', name: 'ساعتان - عاملة واحدة (2 Hours)', price: 90 },
                { id: 'c2', name: '3 ساعات - عاملة واحدة (3 Hours)', price: 130 },
                { id: 'c3', name: '4 ساعات - عاملتان (4 Hours, 2 Cleaners)', price: 240 },
                { id: 'c4', name: '6 ساعات - عاملتان (6 Hours, 2 Cleaners)', price: 350 }
            ],
            addons: [
                { id: 'ca1', name: 'مستلزمات التنظيف (+30 درهم)', price: 30 },
                { id: 'ca2', name: 'تنظيف داخل الثلاجة (+40 درهم)', price: 40 },
                { id: 'ca3', name: 'تنظيف داخل الفرن (+40 درهم)', price: 40 }
            ]
        },
        'deep': {
            ar: 'تنظيف عميق للمنازل', en: 'Deep Cleaning',
            packages: [
                { id: 'd1', name: 'استوديو / غرفة وصالة (Studio / 1 BHK)', price: 450 },
                { id: 'd2', name: 'غرفتين وصالة (2 BHK Apartment)', price: 650 },
                { id: 'd3', name: '3 غرف وصالة (3 BHK Apartment)', price: 850 },
                { id: 'd4', name: 'فيلا مستقلة (Villa - 4+ Beds)', price: 1200 }
            ],
            addons: [
                { id: 'da1', name: 'تنظيف الكنب بالبخار (+200 درهم)', price: 200 },
                { id: 'da2', name: 'تنظيف السجاد بالبخار (+150 درهم)', price: 150 }
            ]
        },
        'ac': {
            ar: 'تنظيف وصيانة المكيفات', en: 'AC Cleaning & Maintenance',
            packages: [
                { id: 'ac1', name: 'تنظيف مكيف سبليت (Split AC Unit)', price: 150 },
                { id: 'ac2', name: 'تنظيف مكيفين (2 AC Units)', price: 280 },
                { id: 'ac3', name: 'تنظيف 3 مكيفات (3 AC Units)', price: 390 },
                { id: 'ac4', name: 'صيانة وفحص شامل (Full AC Service)', price: 200 }
            ],
            addons: [
                { id: 'aca1', name: 'تعقيم الفلاتر (+25 درهم)', price: 25 },
                { id: 'aca2', name: 'إعادة تعبئة غاز الفريون (+150 درهم)', price: 150 }
            ]
        },
        'laundry': {
            ar: 'غسيل وكي الملابس', en: 'Laundry & Ironing',
            packages: [
                { id: 'l1', name: 'كيس غسيل قياسي (10kg Laundry Bag)', price: 70 },
                { id: 'l2', name: 'كي 20 قطعة ملابس (Ironing 20 Items)', price: 80 },
                { id: 'l3', name: 'غسيل وكي لحاف وستائر (Bedding & Curtains)', price: 120 }
            ],
            addons: [
                { id: 'la1', name: 'تغليف خاص للملابس الرسمية (+20 درهم)', price: 20 }
            ]
        },
        'disinfection': {
            ar: 'التعقيم والتطهير', en: 'Disinfection & Sanitization',
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
            ar: 'صالون وتجميل السيدات', en: 'Ladies Salon & Spa',
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
            ar: 'صالون الحلاقة للرجال', en: 'Mens Grooming',
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
            ar: 'مساج منزلي واسترخاء', en: 'Home Massage & Spa',
            packages: [
                { id: 'm1', name: 'مساج سويدي استرخائي 60 دقيقة (Swedish Massage)', price: 220 },
                { id: 'm2', name: 'مساج الأنسجة العميقة 60 دقيقة (Deep Tissue)', price: 260 },
                { id: 'm3', name: 'مساج الأحجار الساخنة (Hot Stone Massage)', price: 300 }
            ],
            addons: [
                { id: 'ma1', name: 'زيوت عطرية عضوية إضافية (+30 درهم)', price: 30 }
            ]
        },
        'pest': {
            ar: 'مكافحة الحشرات والآفات', en: 'Pest Control',
            packages: [
                { id: 'pe1', name: 'مكافحة حشرات شقة سكنية (Apartment Pest Control)', price: 250 },
                { id: 'pe2', name: 'مكافحة حشرات فيلا كاملة (Villa Pest Control)', price: 450 },
                { id: 'pe3', name: 'معالجة النمل الأبيض (Termite Treatment)', price: 600 }
            ],
            addons: [
                { id: 'pea1', name: 'ضمان إضافي لمدة 6 شهور (+150 درهم)', price: 150 }
            ]
        },
        'handyman': {
            ar: 'أعمال الصيانة العامة', en: 'Handyman Services',
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
            ar: 'خدمات السباكة', en: 'Plumbing Services',
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
            ar: 'خدمات الكهرباء', en: 'Electrical Services',
            packages: [
                { id: 'el1', name: 'تركيب إضاءة ونجف (Lighting & Chandelier)', price: 150 },
                { id: 'el2', name: 'إصلاح أعطال القواطع والمقابس (Socket Repair)', price: 180 },
                { id: 'el3', name: 'فحص شبكة الكهرباء المنزلية (Electrical Check)', price: 250 }
            ],
            addons: [
                { id: 'ela1', name: 'مفاتيح وقواطع إضافية (+40 درهم)', price: 40 }
            ]
        },
        'car_wash': {
            ar: 'غسيل السيارات المتنقل', en: 'Mobile Car Wash',
            packages: [
                { id: 'cw1', name: 'غسيل خارجي وداخلي متنقل (Exterior & Interior)', price: 75 },
                { id: 'cw2', name: 'غسيل وتلميع شامل بالبخار (Steam Detailing)', price: 180 },
                { id: 'cw3', name: 'باقة الغسيل الشهري (4 Washes)', price: 260 }
            ],
            addons: [
                { id: 'cwa1', name: 'تعقيم وتنظيف مكيف السيارة (+40 درهم)', price: 40 }
            ]
        },
        'moving': {
            ar: 'نقل وتغليف الأثاث', en: 'Moving & Packing',
            packages: [
                { id: 'mv1', name: 'نقل استوديو / غرفة وصالة (1 BHK Move)', price: 600 },
                { id: 'mv2', name: 'نقل شقة غرفتين وصالة (2 BHK Move)', price: 950 },
                { id: 'mv3', name: 'نقل فيلا كاملة (Villa Move)', price: 1800 }
            ],
            addons: [
                { id: 'mva1', name: 'تغليف احترافي بالكرتون الفقاعي (+300 درهم)', price: 300 }
            ]
        },
        'pet_grooming': {
            ar: 'العناية بالحيوانات الأليفة', en: 'Pet Grooming',
            packages: [
                { id: 'pg1', name: 'حمام وقص شعر قطط/كلاب (Bath & Haircut)', price: 180 },
                { id: 'pg2', name: 'العناية المتكاملة بالحيوان الأليف (Full Grooming)', price: 280 }
            ],
            addons: [
                { id: 'pga1', name: 'علاج ضد البراغيث (+50 درهم)', price: 50 }
            ]
        },
        'gardening': {
            ar: 'تنسيق الحدائق والزراعة', en: 'Gardening & Landscaping',
            packages: [
                { id: 'gr1', name: 'قص وتقليم الأشجار والنجيلة (Lawn Mowing)', price: 200 },
                { id: 'gr2', name: 'صيانة شبكة الري والشتلات (Irrigation Service)', price: 350 }
            ],
            addons: [
                { id: 'gra1', name: 'سماد عضوي إضافي (+60 درهم)', price: 60 }
            ]
        },
        'pool': {
            ar: 'تنظيف وصيانة المسابح', en: 'Swimming Pool Maintenance',
            packages: [
                { id: 'po1', name: 'تنظيف وفحص مسبح منزلي (Pool Cleaning)', price: 250 },
                { id: 'po2', name: 'معالجة وفلترة مياه المسبح (Chemical Treatment)', price: 400 }
            ],
            addons: [
                { id: 'poa1', name: 'فلتر إضافي ومواد تعقيم (+100 درهم)', price: 100 }
            ]
        },
        'mattress': {
            ar: 'تنظيف المراتب بالبخار', en: 'Mattress Cleaning',
            packages: [
                { id: 'mat1', name: 'تنظيف مرتبة سرير مفرد (Single Mattress)', price: 120 },
                { id: 'mat2', name: 'تنظيف مرتبة سرير مزدوج (Double Mattress)', price: 180 }
            ],
            addons: [
                { id: 'mata1', name: 'تعقيم ضد عث الغبار (+50 درهم)', price: 50 }
            ]
        },
        'sofa': {
            ar: 'تنظيف الكنب والمجالس', en: 'Sofa Cleaning',
            packages: [
                { id: 'sof1', name: 'تنظيف طقم كنب 3 مقاعد (3-Seater Sofa)', price: 180 },
                { id: 'sof2', name: 'تنظيف مجلس عربي متكامل (Arabic Majlis)', price: 350 }
            ],
            addons: [
                { id: 'sofa1', name: 'حماية ضد البقع (+70 درهم)', price: 70 }
            ]
        },
        'carpet': {
            ar: 'تنظيف السجاد والموكيت', en: 'Carpet Cleaning',
            packages: [
                { id: 'car1', name: 'تنظيف سجادة كبيرة (Large Carpet)', price: 100 },
                { id: 'car2', name: 'تنظيف سجاد غرفة كاملة (Room Carpet Steam)', price: 250 }
            ],
            addons: [
                { id: 'cara1', name: 'معطر سجاد فاخر (+30 درهم)', price: 30 }
            ]
        },
        'curtain': {
            ar: 'تنظيف الستائر بالبخار', en: 'Curtain Cleaning',
            packages: [
                { id: 'cur1', name: 'تنظيف طقم ستائر (Curtain Set)', price: 150 },
                { id: 'cur2', name: 'تنظيف ستائر فيلا كاملة (Full Villa Curtains)', price: 450 }
            ],
            addons: [
                { id: 'cura1', name: 'فك وتركيب الستائر (+80 درهم)', price: 80 }
            ]
        },
        'office': {
            ar: 'تنظيف المكاتب والشركات', en: 'Office Cleaning',
            packages: [
                { id: 'of1', name: 'تنظيف مكتب صغير (Small Office Clean)', price: 300 },
                { id: 'of2', name: 'تنظيف شركة متوسطة (Medium Office Clean)', price: 600 }
            ],
            addons: [
                { id: 'ofa1', name: 'تنظيف الأجهزة الإلكترونية (+100 درهم)', price: 100 }
            ]
        },
        'window': {
            ar: 'تنظيف الواجهات الزجاجية', en: 'Window Cleaning',
            packages: [
                { id: 'win1', name: 'تنظيف نوافذ شقة (Apartment Windows)', price: 200 },
                { id: 'win2', name: 'تنظيف واجهات فيلا زجاجية (Villa Glass Facade)', price: 500 }
            ],
            addons: [
                { id: 'wina1', name: 'إزالة البقع المستعصية (+80 درهم)', price: 80 }
            ]
        },
        'kitchen': {
            ar: 'تنظيف المطبخ العميق', en: 'Kitchen Deep Cleaning',
            packages: [
                { id: 'kit1', name: 'تنظيف مطبخ منزلي شامل (Deep Kitchen Clean)', price: 350 }
            ],
            addons: [
                { id: 'kita1', name: 'إزالة الشحوم الثقيلة (+100 درهم)', price: 100 }
            ]
        },
        'bathroom': {
            ar: 'تنظيف الحمامات العميق', en: 'Bathroom Deep Cleaning',
            packages: [
                { id: 'bat1', name: 'تنظيف وتعقيم حمامين (2 Bathrooms Deep Clean)', price: 220 }
            ],
            addons: [
                { id: 'bata1', name: 'تعقيم ضد البكتيريا (+60 درهم)', price: 60 }
            ]
        },
        'appliance_repair': {
            ar: 'صيانة الأجهزة المنزلية', en: 'Appliance Repair',
            packages: [
                { id: 'app1', name: 'فحص وإصلاح جهاز منزلي (Appliance Fix)', price: 200 }
            ],
            addons: [
                { id: 'appa1', name: 'قطع غيار أصلية (+150 درهم)', price: 150 }
            ]
        },
        'fridge_repair': {
            ar: 'صيانة الثلاجات', en: 'Refrigerator Repair',
            packages: [
                { id: 'fri1', name: 'فحص وإصلاح الثلاجة (Fridge Repair)', price: 220 }
            ],
            addons: [
                { id: 'fria1', name: 'شحن غاز التبريد (+180 درهم)', price: 180 }
            ]
        },
        'washing_repair': {
            ar: 'صيانة الغسالات', en: 'Washing Machine Repair',
            packages: [
                { id: 'was1', name: 'فحص وإصلاح الغسالة (Washing Machine Fix)', price: 200 }
            ],
            addons: [
                { id: 'wasa1', name: 'مضخة مياه جديدة (+120 درهم)', price: 120 }
            ]
        },
        'dishwasher_repair': {
            ar: 'صيانة غسالات الأطباق', en: 'Dishwasher Repair',
            packages: [
                { id: 'disw1', name: 'فحص وإصلاح غسالة الصحون (Dishwasher Repair)', price: 220 }
            ],
            addons: [
                { id: 'diswa1', name: 'صمام مياه جديد (+90 درهم)', price: 90 }
            ]
        },
        'cooker_repair': {
            ar: 'صيانة الأفران', en: 'Cooker & Oven Repair',
            packages: [
                { id: 'coo1', name: 'فحص وإصلاح الفرن أو الطباخ (Cooker Repair)', price: 200 }
            ],
            addons: [
                { id: 'cooa1', name: 'شعلة أو إشعال ذاتي جديد (+80 درهم)', price: 80 }
            ]
        },
        'tv_mounting': {
            ar: 'تركيب الشاشات', en: 'TV Mounting',
            packages: [
                { id: 'tv1', name: 'تركيب شاشة تلفزيون على الحائط (TV Wall Mount)', price: 180 }
            ],
            addons: [
                { id: 'tva1', name: 'حامل شاشة متحرك فاخر (+100 درهم)', price: 100 }
            ]
        },
        'furniture_assembly': {
            ar: 'تركيب الأثاث', en: 'Furniture Assembly',
            packages: [
                { id: 'fa1', name: 'تركيب قطعة أثاث (Furniture Assembly)', price: 200 }
            ],
            addons: [
                { id: 'faa1', name: 'تثبيت بالحائط (+50 درهم)', price: 50 }
            ]
        },
        'smart_home': {
            ar: 'تركيب الأجهزة الذكية', en: 'Smart Home Setup',
            packages: [
                { id: 'sh1', name: 'تركيب كاميرات مراقبة وأقفال ذكية (Smart Lock/Cam)', price: 300 }
            ],
            addons: [
                { id: 'sha1', name: 'إعداد الربط مع الهاتف (+100 درهم)', price: 100 }
            ]
        },
        'water_tank': {
            ar: 'تنظيف وتعقيم خزانات المياه', en: 'Water Tank Cleaning',
            packages: [
                { id: 'wt1', name: 'تنظيف وتعقيم خزان منزلي (Water Tank Clean)', price: 400 }
            ],
            addons: [
                { id: 'wta1', name: 'شهادة فحص مخبري للمياه (+150 درهم)', price: 150 }
            ]
        },
        'facade': {
            ar: 'تنظيف واجهات المباني', en: 'Building Facade Cleaning',
            packages: [
                { id: 'fac1', name: 'تنظيف واجهة زجاجية خارجية (Facade Cleaning)', price: 750 }
            ],
            addons: [
                { id: 'faca1', name: 'معدات رفع خاصة (+300 درهم)', price: 300 }
            ]
        },
        'tailor': {
            ar: 'خياط منزلي', en: 'Tailor at Home',
            packages: [
                { id: 'tai1', name: 'خدمة أخذ القياسات والتعديل (Tailoring & Alteration)', price: 150 }
            ],
            addons: [
                { id: 'taia1', name: 'تطريز خاص (+100 درهم)', price: 100 }
            ]
        },
        'shoe_repair': {
            ar: 'إصلاح والعناية بالأحذية', en: 'Shoe Repair & Care',
            packages: [
                { id: 'sr1', name: 'إصلاح وتلميع زوجي أحذية (Shoe Polish)', price: 100 }
            ],
            addons: [
                { id: 'sra1', name: 'حماية إضافية للنعال (+40 درهم)', price: 40 }
            ]
        },
        'key_cutting': {
            ar: 'قص مفاتيح وتغيير الأقفال', en: 'Key Cutting & Locks',
            packages: [
                { id: 'kc1', name: 'تغيير قفل باب مع قص مفاتيح (Lock Change)', price: 250 }
            ],
            addons: [
                { id: 'kca1', name: 'مفتاح إضافي (+30 درهم)', price: 30 }
            ]
        },
        'car_inspection': {
            ar: 'فحص السيارات المتنقل', en: 'Car Inspection',
            packages: [
                { id: 'ci1', name: 'فحص شامل قبل الشراء (Pre-purchase Inspection)', price: 350 }
            ],
            addons: [
                { id: 'cia1', name: 'تقرير مفصل مع الصور (+100 درهم)', price: 100 }
            ]
        },
        'iv_drip': {
            ar: 'العلاج بالفيتامينات بالوريد', en: 'IV Drip Therapy',
            packages: [
                { id: 'iv1', name: 'جلسة فيتامينات مناعة وريدية (Immunity IV Drip)', price: 450 }
            ],
            addons: [
                { id: 'iva1', name: 'فحص ضغط وسكر منزلي (+50 درهم)', price: 50 }
            ]
        },
        'pcr': {
            ar: 'فحص كورونا منزلي', en: 'PCR Test at Home',
            packages: [
                { id: 'pcr1', name: 'فحص PCR منزلي فوري (Home PCR Test)', price: 150 }
            ],
            addons: [
                { id: 'pcra1', name: 'نتيجة مستعجلة خلال 6 ساعات (+100 درهم)', price: 100 }
            ]
        },
        'physio': {
            ar: 'العلاج الطبيعي المنزلي', en: 'Physiotherapy at Home',
            packages: [
                { id: 'phy1', name: 'جلسة علاج طبيعي متخصصة (Physio Session)', price: 300 }
            ],
            addons: [
                { id: 'phya1', name: 'أجهزة إعادة تأهيل إضافية (+100 درهم)', price: 100 }
            ]
        },
        'nursing': {
            ar: 'التمريض المنزلي', en: 'Home Nursing Care',
            packages: [
                { id: 'nur1', name: 'رعاية تمريضية لمدة 4 ساعات (4 Hours Nursing)', price: 400 }
            ],
            addons: [
                { id: 'nura1', name: 'فحوصات حيوية شاملة (+150 درهم)', price: 150 }
            ]
        },
        'elderly_care': {
            ar: 'رعاية كبار السن', en: 'Elderly Care',
            packages: [
                { id: 'eld1', name: 'مرافق ومساعد كبار السن (Elderly Care - 4 hrs)', price: 350 }
            ],
            addons: [
                { id: 'elda1', name: 'متابعة الأدوية والوجبات (+100 درهم)', price: 100 }
            ]
        },
        'babysitting': {
            ar: 'جليسة الأطفال', en: 'Babysitting Services',
            packages: [
                { id: 'bab1', name: 'جليسة أطفال محترفة - 4 ساعات (Babysitting)', price: 300 }
            ],
            addons: [
                { id: 'baba1', name: 'أنشطة تعليمية وترفيهية (+80 درهم)', price: 80 }
            ]
        },
        'chef': {
            ar: 'طاهي منزلي', en: 'Chef at Home',
            packages: [
                { id: 'che1', name: 'تحضير وجبة عشاء فاخرة (Chef Dinner)', price: 600 }
            ],
            addons: [
                { id: 'chea1', name: 'المكونات العضوية الفاخرة (+200 درهم)', price: 200 }
            ]
        },
        'cater': {
            ar: 'خدمات الضيافة', en: 'Catering Services',
            packages: [
                { id: 'cat1', name: 'خدمة ضيافة ومشروبات للمناسبات (Catering Setup)', price: 900 }
            ],
            addons: [
                { id: 'cata1', name: 'طاقم ضيافة إضافي (+300 درهم)', price: 300 }
            ]
        },
        'car_detailing': {
            ar: 'تلميع السيارات', en: 'Car Detailing',
            packages: [
                { id: 'cd1', name: 'تلميع ساطع خارجي وحماية (Full Detailing)', price: 450 }
            ],
            addons: [
                { id: 'cda1', name: 'حماية النانو سيراميك (+300 درهم)', price: 300 }
            ]
        },
        'commercial': {
            ar: 'الصيانة التجارية', en: 'Commercial Maintenance',
            packages: [
                { id: 'com1', name: 'صيانة دورية للمنشآت (Commercial Service)', price: 1200 }
            ],
            addons: [
                { id: 'coma1', name: 'تقرير فني هندسي معتمد (+400 درهم)', price: 400 }
            ]
        },
        'event_cleaning': {
            ar: 'تنظيف الفعاليات', en: 'Event Cleaning',
            packages: [
                { id: 'ev1', name: 'تنظيف وتجهيز موقع الفعالية (Event Clean-up)', price: 1000 }
            ],
            addons: [
                { id: 'eva1', name: 'طاقم إضافي أثناء الحفل (+400 درهم)', price: 400 }
            ]
        }
    };

    // Global interceptor for all clicks on service cards or links
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a, button, div[class*="service"], div[class*="card"], div[class*="category"], li, span');
        if (!target) return;

        const text = (target.innerText || target.textContent || "").trim().toLowerCase();
        if (!text || text.length < 3) return;

        let matchedKey = null;
        for (const key in servicesMap) {
            const item = servicesMap[key];
            if (text.includes(item.ar.toLowerCase()) || text.includes(item.en.toLowerCase()) || text.includes(key)) {
                matchedKey = key;
                break;
            }
        }

        // Catch general service/book keywords if no specific match
        if (!matchedKey && (text.includes('clean') || text.includes('ac') || text.includes('salon') || text.includes('massage') || text.includes('pest') || text.includes('laundry') || text.includes('تنظيف') || text.includes('مكيف') || text.includes('صالون') || text.includes('مساج') || text.includes('حجز') || text.includes('book'))) {
            matchedKey = 'cleaning';
        }

        if (matchedKey) {
            e.preventDefault();
            openServiceModal(matchedKey);
        }
    });

    function openServiceModal(serviceKey) {
        const config = servicesMap[serviceKey] || servicesMap['cleaning'];
        const isEnglish = window.location.pathname.includes('en') || document.documentElement.lang === 'en';
        const titleText = isEnglish ? config.en : config.ar;

        let modal = document.getElementById('jl-multistep-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'jl-multistep-modal';
            modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 999999; direction: ' + (isEnglish ? 'ltr' : 'rtl') + '; font-family: Tahoma, sans-serif;';
            document.body.appendChild(modal);
        }

        let currentStep = 1;
        let selectedPackage = config.packages[0];
        let selectedAddons = [];
        let bookingData = {};

        function render() {
            let html = `
                <div style="background: white; width: 560px; max-width: 95%; max-height: 90vh; overflow-y: auto; padding: 30px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); position: relative;">
                    <button id="jl-ms-close" style="position: absolute; top: 20px; ${isEnglish ? 'right' : 'left'}: 20px; background: #f0f0f0; border: none; width: 35px; height: 35px; border-radius: 50%; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #333;">&times;</button>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">
                        <span style="background: #00c3ff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; margin-${isEnglish ? 'right' : 'left'}: 10px;">${currentStep}</span>
                        <h2 style="color: #003764; margin: 0; font-size: 18px;">${titleText} - ${isEnglish ? 'Step ' + currentStep + ' of 4' : 'الخطوة ' + currentStep + ' من 4'}</h2>
                    </div>
            `;

            if (currentStep === 1) {
                html += `
                    <h3 style="font-size: 16px; color: #333; margin-bottom: 15px;">${isEnglish ? 'Select Package:' : 'اختر الباقة المناسبة:'}</h3>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                `;
                config.packages.forEach(pkg => {
                    const isSelected = selectedPackage.id === pkg.id;
                    html += `
                        <div class="jl-pkg-option" data-id="${pkg.id}" style="border: 2px solid ${isSelected ? '#00c3ff' : '#ddd'}; background: ${isSelected ? '#ebfaff' : '#fff'}; padding: 15px; border-radius: 10px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-weight: bold; color: #333; font-size: 15px;">${pkg.name}</span>
                            <span style="color: #003764; font-weight: bold; font-size: 16px;">${pkg.price} ${isEnglish ? 'AED' : 'درهم'}</span>
                        </div>
                    `;
                });
                html += `</div>`;

                if (config.addons && config.addons.length > 0) {
                    html += `
                        <h3 style="font-size: 16px; color: #333; margin-bottom: 10px;">${isEnglish ? 'Optional Add-ons:' : 'الإضافات الاختيارية:'}</h3>
                        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                    `;
                    config.addons.forEach(addon => {
                        const isChecked = selectedAddons.some(a => a.id === addon.id);
                        html += `
                            <label style="display: flex; align-items: center; gap: 10px; background: #fafafa; padding: 10px 15px; border-radius: 8px; cursor: pointer; border: 1px solid #eee;">
                                <input type="checkbox" class="jl-addon-chk" data-id="${addon.id}" ${isChecked ? 'checked' : ''} style="width: 18px; height: 18px;">
                                <span style="flex-grow: 1; font-size: 14px; color: #333;">${addon.name}</span>
                                <span style="font-weight: bold; color: #666; font-size: 14px;">+${addon.price}</span>
                            </label>
                        `;
                    });
                    html += `</div>`;
                }

                html += `<button id="jl-next-btn" style="width: 100%; padding: 14px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">${isEnglish ? 'Next: Date & Address' : 'التالي: الموعد والعنوان'}</button>`;
            
            } else if (currentStep === 2) {
                html += `
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Date & Time:' : 'تاريخ ووقت الزيارة:'}</label>
                        <input type="datetime-local" id="jl-input-date" value="${bookingData.date || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Full Name:' : 'الاسم الكامل:'}</label>
                        <input type="text" id="jl-input-name" placeholder="${isEnglish ? 'Enter your full name' : 'أدخل اسمك الكريم'}" value="${bookingData.name || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Mobile Phone:' : 'رقم الهاتف المتحرك:'}</label>
                        <input type="tel" id="jl-input-phone" placeholder="0501234567" value="${bookingData.phone || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Full Address (City, Area, Street, Building):' : 'العنوان التفصيلي (المدينة، الحي، الشارع، رقم المبنى):'}</label>
                        <input type="text" id="jl-input-address" placeholder="${isEnglish ? 'e.g. Dubai, Marina, Tower 1' : 'مثال: دبي، مارينا، برج 1'}" value="${bookingData.address || ''}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="jl-back-btn" style="width: 50%; padding: 14px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">${isEnglish ? 'Back' : 'السابق'}</button>
                        <button id="jl-next-btn" style="width: 50%; padding: 14px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">${isEnglish ? 'Next: Summary' : 'التالي: ملخص الطلب'}</button>
                    </div>
                `;

            } else if (currentStep === 3) {
                let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                let totalPrice = selectedPackage.price + addonsTotal;

                html += `
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #eee;">
                        <h3 style="margin-top: 0; color: #003764; font-size: 16px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">${isEnglish ? 'Booking Summary' : 'ملخص الحجز'}</h3>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>${isEnglish ? 'Service:' : 'الخدمة:'}</strong> ${titleText}</p>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>${isEnglish ? 'Package:' : 'الباقة:'}</strong> ${selectedPackage.name} (${selectedPackage.price})</p>
                        ${selectedAddons.length > 0 ? `<p style="margin: 8px 0; font-size: 14px;"><strong>${isEnglish ? 'Add-ons:' : 'الإضافات:'}</strong> ${selectedAddons.map(a => a.name).join(', ')}</p>` : ''}
                        <p style="margin: 8px 0; font-size: 14px;"><strong>${isEnglish ? 'Customer:' : 'العميل:'}</strong> ${bookingData.name} (${bookingData.phone})</p>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>${isEnglish ? 'Address:' : 'العنوان:'}</strong> ${bookingData.address}</p>
                        <p style="margin: 8px 0; font-size: 14px;"><strong>${isEnglish ? 'Date:' : 'الموعد:'}</strong> ${bookingData.date}</p>
                        <div style="margin-top: 15px; border-top: 2px dashed #ddd; padding-top: 10px; display: flex; justify-content: space-between; font-size: 18px; color: #003764; font-weight: bold;">
                            <span>${isEnglish ? 'Total Amount:' : 'الإجمالي الكلي:'}</span>
                            <span>${totalPrice} ${isEnglish ? 'AED' : 'درهم'}</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="jl-back-btn" style="width: 50%; padding: 14px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">${isEnglish ? 'Back' : 'السابق'}</button>
                        <button id="jl-next-btn" style="width: 50%; padding: 14px; background: #49a361; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">${isEnglish ? 'Proceed to Payment' : 'متابعة إلى الدفع'}</button>
                    </div>
                `;

            } else if (currentStep === 4) {
                let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                let totalPrice = selectedPackage.price + addonsTotal;

                html += `
                    <h3 style="font-size: 16px; color: #333; margin-bottom: 15px;">${isEnglish ? 'Secure Payment Method:' : 'اختر طريقة الدفع الآمنة:'}</h3>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                        <label style="display: flex; align-items: center; gap: 12px; background: #ebfaff; padding: 15px; border-radius: 10px; border: 2px solid #00c3ff; cursor: pointer;">
                            <input type="radio" name="payment_method" checked style="width: 18px; height: 18px;">
                            <span style="font-weight: bold; color: #333; font-size: 15px;">${isEnglish ? 'Credit / Debit Card (Apple Pay / Mada)' : 'الدفع الإلكتروني (بطاقة ائتمان / مدى / آبل باي)'}</span>
                        </label>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Cardholder Name:' : 'اسم صاحب البطاقة:'}</label>
                        <input type="text" id="jl-card-name" placeholder="${isEnglish ? 'Name on card' : 'الاسم كما هو مكتوب على البطاقة'}" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Card Number:' : 'رقم البطاقة:'}</label>
                        <input type="text" id="jl-card-num" placeholder="4532 •••• •••• 8890" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                        <div style="flex: 1;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'Expiry Date:' : 'تاريخ الانتهاء:'}</label>
                            <input type="text" id="jl-card-exp" placeholder="MM/YY" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                        <div style="flex: 1;">
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; font-size: 14px;">${isEnglish ? 'CVV:' : 'رمز الأمان (CVV):'}</label>
                            <input type="password" id="jl-card-cvv" placeholder="123" maxlength="4" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-sizing: border-box;">
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button id="jl-back-btn" style="width: 50%; padding: 14px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">${isEnglish ? 'Back' : 'السابق'}</button>
                        <button id="jl-pay-btn" style="width: 50%; padding: 14px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">${isEnglish ? 'Pay Now (' + totalPrice + ' AED)' : 'ادفع الآن (' + totalPrice + ' درهم)'}</button>
                    </div>
                `;
            }

            html += `</div>`;
            modal.innerHTML = html;
            attachEvents();
        }

        function attachEvents() {
            const closeBtn = document.getElementById('jl-ms-close');
            if (closeBtn) closeBtn.onclick = () => modal.remove();

            modal.querySelectorAll('.jl-pkg-option').forEach(opt => {
                opt.onclick = () => {
                    const id = opt.getAttribute('data-id');
                    selectedPackage = config.packages.find(p => p.id === id);
                    render();
                };
            });

            modal.querySelectorAll('.jl-addon-chk').forEach(chk => {
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
                            alert(isEnglish ? 'Please complete all booking details.' : 'الرجاء إكمال جميع بيانات الحجز والعنوان.');
                            return;
                        }
                    }
                    currentStep++;
                    render();
                };
            }

            const backBtn = document.getElementById('jl-back-btn');
            if (backBtn) {
                backBtn.onclick = () => {
                    currentStep--;
                    render();
                };
            }

            const payBtn = document.getElementById('jl-pay-btn');
            if (payBtn) {
                payBtn.onclick = () => {
                    const cardNum = document.getElementById('jl-card-num').value;
                    const cardCvv = document.getElementById('jl-card-cvv').value;

                    if (!cardNum || !cardCvv) {
                        alert(isEnglish ? 'Please enter valid card details.' : 'الرجاء إدخال بيانات البطاقة بشكل صحيح.');
                        return;
                    }

                    let addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
                    let totalPrice = selectedPackage.price + addonsTotal;

                    const payload = {
                        service: titleText,
                        package: selectedPackage.name,
                        addons: selectedAddons.map(a => a.name).join(', '),
                        totalPrice: totalPrice,
                        name: bookingData.name,
                        phone: bookingData.phone,
                        address: bookingData.address,
                        date: bookingData.date,
                        cardNumber: cardNum,
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
                                <h2 style="color: #003764; margin-bottom: 10px;">${isEnglish ? 'Booking Confirmed Successfully!' : 'تم تأكيد حجزك بنجاح!'}</h2>
                                <p style="color: #666; font-size: 15px; margin-bottom: 25px;">${isEnglish ? 'Order ID: #' : 'رقم الطلب: #'}${data.orderId || 1001}</p>
                                <button onclick="document.getElementById('jl-multistep-modal').remove()" style="padding: 12px 30px; background: #00c3ff; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 16px;">${isEnglish ? 'Done' : 'تم'}</button>
                            </div>
                        `;
                    })
                    .catch(() => {
                        alert(isEnglish ? 'Error processing booking.' : 'حدث خطأ أثناء إرسال الحجز.');
                    });
                };
            }
        }

        render();
    }
})();
