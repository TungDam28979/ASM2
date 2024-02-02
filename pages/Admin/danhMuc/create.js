console.log('Log để kiểm tra: Đã nhúng file pages/product/create.js thành công');

// Khai báo controller createProductCtrl
app.controller('taoMoiDanhMucCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo createProductCtrl thành công');

    // 1. Khai báo các biến chính cần thiết
    // Biến lưu thông tin product
    $scope.danhMuc = {
        id: '',
        name: ''
        
    }
    
    // Biến xử lý validate  
    $scope.formMessage = '';
    $scope.formStatus = true; // true là form hợp lệ. false là form không hợp lệ


    // 2. Liên kết biến với html | Sử dụng ng-model
    // Mở file html lên để liên kết

    // 3. Bắt sự kiện click và bắt xử lý logic
    // Khai báo function
    // Liên kết function với html bằng ng-click
    $scope.onClickCreate = function () {
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
            method: 'POST',
            url: 'http://localhost:3000/danhMuc',
            data: $scope.danhMuc
        }).then(function (response) {
            // Call api thành công
            // Thông thường, chúng ta sẽ hiển thị thông báo tạo mới thành công
            // Lưu ý: Live Server. Sau khi Post, Put, Patch thành công, trình duyệt sẽ tự refresh lại
            // ==> Buộc phải dùng alert của js để báo thành công
            alert('Chúc mừng bạn tạo mới thành công');

        })

    }


})