let route = [];
route.push("Индустриальная");
alert(route);
route.push("Тракторный завод");
alert(route);
route.push("им. Масельского");
alert(route);
route.push("Армейская");
alert(route);
route.push("Дворец спорта");
alert(route);
route.push("Турбоатом");
alert(route);
route.push("Завод им. Малышева");
alert(route);

while (route.length > 0) {
  route.pop();
  alert(route);
}
