import '../scss/app.scss';

// Handle table row toggling
const btnGroupButtons = document.querySelectorAll('.btn-group__button');
btnGroupButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-group__button_active')) {
      const parent = e.target.closest('.btn-group');
      const siblings = parent.querySelectorAll('.btn-group__button');
      siblings.forEach((btn) => {
        btn.classList.remove('btn-group__button_active');
      });
      e.target.classList.add('btn-group__button_active');
    }
  });
});

// Handle table row toggling
const nameItems = document.querySelectorAll('.table-data__row-body_expandable .table-data__cell-name');
nameItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const parentRow = e.target.closest('.table-data__row-body');
    parentRow.classList.toggle('table-data__row-body_opened');
  });
});

// Handle star button
const btnFavoriteItems = document.querySelectorAll('.button-favorite');
btnFavoriteItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    item.classList.toggle('button-favorite_active');
  });
});

// Handle table columns sorting
const tableSortHeading = document.querySelectorAll('.table-data__sort-direction');
tableSortHeading.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    if (item.classList.contains('table-data__sort-direction_desc') || item.classList.contains('table-data__sort-direction_asc')) {
      item.classList.toggle('table-data__sort-direction_desc');
      item.classList.toggle('table-data__sort-direction_asc');
    } else {
      // if column's sort has no set direction
      item.classList.add('table-data__sort-direction_desc');
    }
  });
});

// Handle same app hover highlighting
const appIcons = document.querySelectorAll('.table-data__icon-app');
const handleAppIconsHover = (element) => {
  const { id } = element.target.dataset;
  const sameElems = document.querySelectorAll(`.table-data__icon-app[data-id='${id}']`);
  sameElems.forEach((elem) => {
    elem.classList.toggle('table-data__icon-app_highlighted');
  });
};
appIcons.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    handleAppIconsHover(e);
  });
});
appIcons.forEach((item) => {
  item.addEventListener('mouseleave', (e) => {
    handleAppIconsHover(e);
  });
});

const checkboxToggleAll = document.querySelector('input[type=checkbox][data-type=toggleAll]');
const checkboxesTableItems = document.querySelectorAll('input[type=checkbox][data-type=tableItem]');
checkboxToggleAll.addEventListener('input', (e) => {
  checkboxesTableItems.forEach((item) => {
    const checkbox = item;
    checkbox.checked = e.target.checked;
  });
});
