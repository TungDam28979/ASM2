console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('detailProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    // 1. Khai báo biến cần thiết
    // Mở file create.js lên và copy phần khai báo biến $scope.product
    $scope.product = {
        id: '',
        name: '',
        price: '',
        category: ''
    }
    

    // 2. Call api lấy thông tin chi tiết sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/product/' + $routeParams.id
    }).then(function(response) {
        // Xử lý logic sau khi call api thành công
        // Gán giá trị vào biến $scope.product
        $scope.product = response.data;
        console.log("log thử giá trị biến $scope.product", $scope.product);

    })


    // 3. Gán link điều hướng cho các button cần thiết

})