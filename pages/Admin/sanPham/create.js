console.log('Log để kiểm tra: Đã nhúng file pages/product/create.js thành công');

// Khai báo controller createProductCtrl
app.controller('taoMoiSanPhamCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo createProductCtrl thành công');

    // 1. Khai báo các biến chính cần thiết

    $scope.danhSachDanhMuc = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/danhMuc'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.danhSachDanhMuc = response.data
        console.log("Log thử giá trị biến listProduct", $scope.danhSachDanhMuc);
        
    })


    // Biến lưu thông tin product
    $scope.sanPham = {
        id: '',
        ten: '',
        anh: '',
        gia: '',
        chiTiet: '',
        danhMuc: ''
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
        console.log('Log thử giá trị biến $scope.sanPham', $scope.sanPham);

        // 3.1. Validate dữ liệu đầu vào
        // Thiết kế html
        // Khai báo biến cần thiết cho validate (Biến phải được khai báo ở toàn cục controller)
        // Liên kết biến vào html
        // Bắt đầu đi validate

        // Reset validate
        $scope.formStatus = true;
        $scope.formMessage = '';

        // Validate id: Bắt buộc
        if ($scope.sanPham.id === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập ID';

            return; // Để kết thúc function luôn
        }

        // Validate name: Bắt buộc
        if ($scope.sanPham.ten === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập Tên';

            return; // Để kết thúc function luôn
        }

        // Validate price: Bắt buộc, Phải là số, Không được nhỏ hơn 1,000,000 vnđ
        if ($scope.sanPham.gia === ''
            || isNaN($scope.sanPham.gia)
            || Number($scope.sanPham.gia) < 10000) {

            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập giá là số và lớn hơn bằng 10,000vnđ';

            return; // Để kết thúc function luôn
        }

        


        // Nếu code chạy được đến đây, nghĩa là form đã hợp lệ
        console.log('Form hợp lệ');


        // 3.2. Call api để lưu dữ liệu vào db
        $http({
            method: 'POST',
            url: 'http://localhost:3000/sanPham',
            data: $scope.sanPham
        }).then(function (response) {
            // Call api thành công
            // Thông thường, chúng ta sẽ hiển thị thông báo tạo mới thành công
            // Lưu ý: Live Server. Sau khi Post, Put, Patch thành công, trình duyệt sẽ tự refresh lại
            // ==> Buộc phải dùng alert của js để báo thành công
            alert('Chúc mừng bạn tạo mới thành công');

        })

    }


})