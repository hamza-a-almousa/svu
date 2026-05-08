const massge = document.getElementById('massge');
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  
    e.preventDefault();
 
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (username === "" || email === "" || message === "") {
        massge.textContent = "يرجى تعبئة كافة الحقول!";
        massge.className = "alert alert-danger d-block";
    } 

    else if (!email.includes("@")) {
        massge.textContent = "يرجى إدخال بريد إلكتروني صحيح.";
        massge.className = "alert alert-warning d-block";
    } 

    else {
        massge.textContent = "شكراً لتواصلك يا " + username + "، تم استلام طلبك.";
        massge.className = "alert alert-success d-block";
        contactForm.reset();
    }
});





function filterEvents() {
    // جلب القيم المختارة من شريط الأدوات
    const nameQuery = document.getElementById('searchName').value.toLowerCase();
    const selectedCategory = document.getElementById('filterCategory').value;
    const selectedLocation = document.getElementById('filterLocation').value;
    const selectedDate = document.getElementById('filterDate').value;

    //  الوصول لجميع بطاقات الفعاليات
    const allCards = document.querySelectorAll('.event-card');

    allCards.forEach(card => {
        //  قراءة البيانات من البطاقة (من العناوين ومن سمات data-)
        const title = card.querySelector('h3').innerText.toLowerCase();
        const category = card.getAttribute('data-category');
        const location = card.getAttribute('data-location');
        const date = card.getAttribute('data-date');

        // تطبيق منطق المقارنة (Logic Gate)
        const nameMatch = title.includes(nameQuery);
        const categoryMatch = selectedCategory === "" || category === selectedCategory;
        const locationMatch = selectedLocation === "" || location.includes(selectedLocation);
        const dateMatch = selectedDate === "" || date === selectedDate;

        //  التحكم بظهور العنصر بناءً على تطابق جميع الشروط
        if (nameMatch && categoryMatch && locationMatch && dateMatch) {
            card.style.display = "block"; // إظهار البطاقة
        } else {
            card.style.display = "none";  // إخفاء البطاقة
        }
    });
}



/**
 * @param {string} categoryName - اسم التصنيف المختار
 */
function filterByBadge(categoryName) {
    // جلب جميع البطاقات الموجودة في قسم "أحدث الفعاليات"
    const cards = document.querySelectorAll('.event-card');

    cards.forEach(card => {
        // جلب التصنيف الخاص بالبطاقة من الـ data-category
        const cardCategory = card.getAttribute('data-category');

        // إذا كان التصنيف المختار فارغاً (زر الكل) أو يطابق تصنيف البطاقة
        if (categoryName === "" || cardCategory === categoryName) {
            card.style.display = "block"; // إظهار البطاقة
            // يمكنك إضافة تأثير أنيميشن بسيط هنا
            card.style.opacity = "1";
        } else {
            card.style.display = "none";  // إخفاء البطاقة
        }
    });
}


