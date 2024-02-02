console.log('Log để kiểm tra: Đã nhúng file pages/product/edit.js thành công');

// Khai báo controller editProductCtrl
app.controller('chinhSuaDanhMucCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    // 1. Khai báo biến cần thiết
    // Mở file create.js và copy
    // Biến lưu thông tin product
    $scope.danhMuc = {
        id: '',
        name: ''
    }

    // Biến xử lý validate  
    $scope.formMessage = '';
    $scope.formStatus = true; // true là form hợp lệ. false là form không hợp lệ


    // 2. Liên kết biến và html
    // Vì copy html nên đã liên kết luôn rồi nhé


    // 3. Call api lấy thông tin chi tiết theo id truyền vào từ url
    // Mở file detail.js lên để copy
    $http({
        method: 'GET',
        url: 'http://localhost:3000/danhMuc/' + $routeParams.id
    }).then(function (response) {
        // Xử lý logic sau khi call api thành công
        // Gán giá trị vào biến $scope.product
        $scope.danhMuc = response.data;
        console.log("log thử giá trị biến $scope.danhMuc", $scope.danhMuc);

    })

    
    // 4. Bắt sự kiện click button edit và xử lý logic
    // Mở file create.js lên và copy
    // Lưu ý 1: Nhớ sửa tên hàm
    // Lưu ý 2: Sửa method của tạo mới thành chỉnh sửa (POST ==> PUT)
    // Lưu ý 3: Sửa url tạo mới thành url chỉnh sửa
    $scope.onClickEdit = function () {
        console.log('Log thử giá trị biến $scope.danhMuc', $scope.danhMuc);

        // 3.1. Validate dữ liệu đầu vào
        // Thiết kế html
        // Khai báo biến cần thiết cho validate (Biến phải được khai báo ở toàn cục controller)
        // Liên kết biến vào html
        // Bắt đầu đi validate

        // Reset validate
        $scope.formStatus = true;
        $scope.formMessage = '';

        // Validate id: Bắt buộc
        if ($scope.danhMuc.id === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập ID';

            return; // Để kết thúc function luôn
        }

        // Validate name: Bắt buộc
        if ($scope.danhMuc.name === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập Tên';

            return; // Để kết thúc function luôn
        }

        // Validate price: Bắt buộc, Phải là số, Không được nhỏ hơn 1,000,000 vnđ
        


        // Nếu code chạy được đến đây, nghĩa là form đã hợp lệ
        console.log('Form hợp lệ');


        // 3.2. Call api để lưu dữ liệu vào db
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/danhMuc/' + $routeParams.id,
            data: $scope.danhMuc
        }).then(function (response) {
            // Call api thành công
            // Thông thường, chúng ta sẽ hiển thị thông báo tạo mới thành công
            // Lưu ý: Live Server. Sau khi Post, Put, Patch thành công, trình duyệt sẽ tự refresh lại
            // ==> Buộc phải dùng alert của js để báo thành công
            alert('Chúc mừng bạn chỉnh sửa thành công');

        })

    }
    

})