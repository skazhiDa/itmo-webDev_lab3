document.addEventListener('DOMContentLoaded', () => {
  let rowCounter = 0;

  function createTable() {
    const table = document.createElement('table');
    const tHead = document.createElement('thead');
    const headTr = document.createElement('tr');
    const idHead = document.createElement('th');
    const dataHead = document.createElement('th');
    const tBody = document.createElement('tbody');
    tBody.id = 'table-body';

    idHead.classList.add('id-column');
    idHead.textContent = 'id';
    dataHead.textContent = 'creation time';

    headTr.append(idHead, dataHead);
    tHead.append(headTr);
    table.append(tHead, tBody);
    document.getElementById('main').append(table);
  }

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', () => {
    createTable();
    createBtn.setAttribute('disabled', 'true');
    document.getElementById('add-line').removeAttribute('disabled')
  });

  document.getElementById('add-line').addEventListener('click', () => {
    const tBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    const idField = document.createElement('td');
    const dataField = document.createElement('td');
    tr.classList.add('list-elem');

    idField.textContent = `${tBody.childElementCount + 1}`;
    dataField.textContent = `${new Date()}`;

    tr.append(idField, dataField);
    tBody.appendChild(tr);

    console.log(document.querySelector(`#table-body`).children)
    console.log(document.querySelector(`#table-body :nth-of-type(2)`))

    rowCounter++;
    document.getElementById('delete-line').removeAttribute('disabled');
  });

  document.getElementById('delete-line').addEventListener('click', () => {
    const rowNum = document.getElementById('delete-input').value;
    if (rowNum && !(String(rowNum).startsWith('0')) && rowNum <= rowCounter) {
      // document.querySelector(`#table-body :nth-of-type(${rowNum})`).remove();
      document.getElementById('table-body').children[rowNum-1].remove();
      rowCounter--;
      for (let i = 1; i <= rowCounter; i++) {
        // document.querySelector(`#table-body :nth-of-type(${i})`).firstChild.textContent = `${i}`;
        document.getElementById('table-body').children[i-1].firstChild.textContent = `${i}`;
      }
    } else {
      window.alert('yb[ez');
    }
  });

});
