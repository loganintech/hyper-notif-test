exports.decorateTerm = (Term, {
  React,
  notify
}) => {

  setTimeout(function () {
    notify("WHAT")
  }, 10000);


  for (let i = 0; i < 10000; i++) {
    setTimeout(function () {
      notify(`[${i}] Notif`)
    }, 10000 + i);
  }
}
