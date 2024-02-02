console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('chiTietSanPhamCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    // 1. Khai báo biến cần thiết
    // Mở file create.js lên và copy phần khai báo biến $scope.product
    $scope.sanPham = {
        id: '',
        ten: '',
        anh: '',
        gia: '',
        chiTiet: '',
        danhMuc: ''
    }
    

    // 2. Call api lấy thông tin chi tiết sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/sanPham/' + $routeParams.id
    }).then(function(response) {
        // Xử lý logic sau khi call api thành công
        // Gán giá trị vào biến $scope.product
        $scope.sanPham = response.data;
        console.log("log thử giá trị biến $scope.sanPham", $scope.sanPham);

    })

    $scope.danhSachSanPham = [];


    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/sanPham'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.danhSachSanPham = response.data
        console.log("Log thử giá trị biến listProduct", $scope.danhSachSanPham);
        
    })


    // 3. Gán link điều hướng cho các button cần thiết

})