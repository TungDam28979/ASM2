console.log(
  "Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công"
);

// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller("chiTietSanPhamCtrl", function ($scope, $http, $routeParams) {
  console.log("Log để kiểm tra: Khai báo detailProductCtrl thành công");
  console.log("Log để in thử giá trị params từ url", $routeParams);

  // 1. Khai báo biến cần thiết
  // Mở file create.js lên và copy phần khai báo biến $scope.product
  $scope.sanPham = {
    id: "",
    ten: "",
    anh: "",
    gia: "",
    chiTiet: "",
    danhMuc: "",
  };

  // 2. Call api lấy thông tin chi tiết sản phẩm
  $http({
    method: "GET",
    url: "http://localhost:3000/sanPham/" + $routeParams.id,
  }).then(function (response) {
    // Xử lý logic sau khi call api thành công
    // Gán giá trị vào biến $scope.product
    $scope.sanPham = response.data;
    console.log("log thử giá trị biến $scope.sanPham", $scope.sanPham);
  });

  $scope.danhSachSanPham = [];

  // 2. Call api lấy danh sách sản phẩm
  $http({
    method: "GET",
    url: "http://localhost:3000/sanPham",
  }).then(function (response) {
    // Gán giá trị sau khi call api thành công
    $scope.danhSachSanPham = response.data;
    console.log("Log thử giá trị biến listProduct", $scope.danhSachSanPham);
  });

  $scope.danhSachGioHang = [];
  $http({
    method: "GET",
    url: "http://localhost:3000/gioHang",
  }).then(function (response) {
    // Gán giá trị sau khi call api thành công
    $scope.danhSachGioHang = response.data;
    console.log("Log thử giá trị biến listProduct", $scope.danhSachGioHang);
  });

  $scope.onClickAdd = function (id) {
    // Biến lưu thông tin gio hang
    $scope.gioHang = {
      id: "",
      soLuong: "",
    };
    console.log("Log thử giá trị biến listProduct", $scope.danhSachGioHang);

    $scope.gioHang.id = id;
    $scope.gioHang.soLuong = 1;
    check = false;

    $scope.danhSachGioHang.forEach((element) => {
      if (element.id == id) {
        $scope.gioHang.soLuong = element.soLuong + 1;
        check = true;
      }
    });

    if (check == false) {
      $http({
        method: "POST",
        url: "http://localhost:3000/gioHang",
        data: $scope.gioHang,
      }).then(function (response) {
        alert("Chúc mừng bạn thêm giỏ hàng thành công");
      });
    }else {
        $http({
            method: "PUT",
            url: "http://localhost:3000/gioHang/" + id,
            data: $scope.gioHang,
        }).then(function (response) {
            alert("Chúc mừng bạn thêm giỏ hàng thành công");
        });
    }
  };
});
