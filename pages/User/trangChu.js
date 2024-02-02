console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');

// 5.1. Khai báo controller listProductCtrl
app.controller('trangChuCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo listProductCtrl thành công');

    // 1. Khai báo biến cần thiết
    $scope.trangChu = [];


    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/sanPham'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.trangChu = response.data
        console.log("Log thử giá trị biến trangChu", $scope.trangChu);
        
    })
    

    // 3. Sử dụng ng-repeat để hiển thị dữ liệu ra màn hình
    // Mở file list.html và code


    // 4. Gán link điều hướng vào các button cần thiết
// 5 bat su kien delete
//  $scope.onClickDelete= function(id){
//     console.log("log thu id mon xoa", id);

//     //call api de lay ban ghi
//     $http({
//         method:'DELETE',
//         url:'http://localhost:3000/sanPham/' +id
//     }).then(function(response){
//         alert('Mung ban xoa thanh cong')
//     })
//  }
 
})
