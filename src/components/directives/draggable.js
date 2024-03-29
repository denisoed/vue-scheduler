const draggable = {
  bind(el, binding, vnode) {
    let column;
    let currentLog;

    vnode.context.$nextTick(() => {
      column = vnode.elm.parentElement;
    });

    function mousemove(event) {
      let newTop = event.clientY - column.getBoundingClientRect().top - (el.getBoundingClientRect().height / 2);
      if (newTop < 0) {
        newTop = 0;
      }
      const bottomEdge = column.getBoundingClientRect().height - el.getBoundingClientRect().height;
      if (newTop > bottomEdge) {
        newTop = bottomEdge;
      }
      const targetColumn = document.getElementById(event && event.target && event.target.id);
      if (targetColumn && targetColumn.className === 'scheduler_column') {
        targetColumn.appendChild(currentLog);
      }
      el.style.top = `${newTop}px`;
    }

    function mouseup() {
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
    }

    el.addEventListener('mousedown', e => {
      currentLog = e.target;
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
      return false;
    });
  }
};

export default draggable;
