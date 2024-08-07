document.addEventListener('DOMContentLoaded', () => {
    const termItems = document.querySelectorAll('.term__item');
    const rateLists = document.querySelectorAll('.rates');

    termItems.forEach(item => {
        item.addEventListener('click', () => {
            termItems.forEach(i => i.classList.remove('term__item--current'));
            item.classList.add('term__item--current');

            const period = item.getAttribute('data-period');

            rateLists.forEach(list => {
                if (!list.classList.contains('vissualy-hidden')) {
                    list.style.opacity = 0;
                    setTimeout(() => {
                        list.classList.add('vissualy-hidden');
                    }, 500);
                }
            });

            const selectedList = document.querySelector(`.rates[data-period="${period}"]`);
            setTimeout(() => {
                selectedList.classList.remove('vissualy-hidden');
                selectedList.style.opacity = 1;
            }, 500);
        });
    });
});

