console.log('Log để kiểm tra: Đã nhúng file pages/product/create.js thành công');




// Khai báo controller createProductCtrl
app.controller('chiTietGioHangCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo createProductCtrl thành công');

    // 1. Khai báo các biến chính cần thiết
    $scope.danhSachGioHang = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/gioHang'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.danhSachGioHang = response.data
        console.log("Log thử giá trị biến listProduct", $scope.danhSachGioHang);
    
    })
   


    // Biến lưu thông tin product
    $scope.gioHang = {
        id: '',
        soLuong: ''
    }


  


    // 2. Call api lấy danh sách sản phẩm
  

    // Biến xử lý validate  
    $scope.formMessage = '';
    $scope.formStatus = true; // true là form hợp lệ. false là form không hợp lệ


    // 2. Liên kết biến với html | Sử dụng ng-model
    // Mở file html lên để liên kết

    // 3. Bắt sự kiện click và bắt xử lý logic
    // Khai báo function
    // Liên kết function với html bằng ng-click
    $scope.onClickCreate = function () {
        console.log('Log thử giá trị biến $scope.gioHang', $scope.gioHang);

        check = false;

        $scope.danhSachGioHang.forEach(element => {
            
        });
         
        $http({
            method: 'POST',
            url: 'http://localhost:3000/gioHang',
            data: $scope.gioHang
        }).then(function (response) {
            // Call api thành công
            // Thông thường, chúng ta sẽ hiển thị thông báo tạo mới thành công
            // Lưu ý: Live Server. Sau khi Post, Put, Patch thành công, trình duyệt sẽ tự refresh lại
            // ==> Buộc phải dùng alert của js để báo thành công
            alert('Chúc mừng bạn tạo mới thành công');
        })

    }


})