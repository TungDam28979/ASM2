console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('xacNhanDonHangCtrl', function ($scope, $http, $routeParams) {
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

    $scope.danhSachDonHang = [];


    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/donHang'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.danhSachDonHang = response.data
        console.log("Log thử giá trị biến listProduct", $scope.danhSachDonHang);
        console.log( $scope.danhSachDonHang);
    })


    // 3. Gán link điều hướng cho các button cần thiết

    $scope.donHang = {
        id:'',
        idSanPham:'',
        ten: '',
        SDT:'',
        diaChi:''
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
        console.log('Log thử giá trị biến $scope.donHang', $scope.donHang);

        // 3.1. Validate dữ liệu đầu vào
        // Thiết kế html
        // Khai báo biến cần thiết cho validate (Biến phải được khai báo ở toàn cục controller)
        // Liên kết biến vào html
        // Bắt đầu đi validate

        // Reset validate
        $scope.formStatus = true;
        $scope.formMessage = '';

        // Validate id: Bắt buộc
        // if ($scope.sanPham.id === '') {
        //     $scope.formStatus = false;
        //     $scope.formMessage = 'Mời bạn nhập ID';

        //     return; // Để kết thúc function luôn
        // }
        maxid=-1;
        // len= danhSachDonHang.length;
        // if(len>0)
        // {
            $scope.danhSachDonHang.forEach(element => {
            maxid = element.id > maxid ? element.id : maxid;
        });
    // }
        $scope.donHang.id=maxid+1;

        $scope.donHang.idSanPham = $routeParams.id;


        // Validate name: Bắt buộc
        if ($scope.donHang.ten === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập Tên';

            return; // Để kết thúc function luôn
        }

         if ($scope.donHang.SDT === '') {
             $scope.formStatus = false;
             $scope.formMessage = 'Mời bạn nhập SDT';

             return; // Để kết thúc function luôn
         }


        if ($scope.donHang.diaChi === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'Mời bạn nhập địa chỉ';

            return; // Để kết thúc function luôn
        }

        // Validate price: Bắt buộc, Phải là số, Không được nhỏ hơn 1,000,000 vnđ
        

        


        // Nếu code chạy được đến đây, nghĩa là form đã hợp lệ
        console.log('Form hợp lệ');


        // 3.2. Call api để lưu dữ liệu vào db
        $http({
            method: 'POST',
            url: 'http://localhost:3000/donHang',
            data: $scope.donHang
        }).then(function (response) {
            // Call api thành công
            // Thông thường, chúng ta sẽ hiển thị thông báo tạo mới thành công
            // Lưu ý: Live Server. Sau khi Post, Put, Patch thành công, trình duyệt sẽ tự refresh lại
            // ==> Buộc phải dùng alert của js để báo thành công
            alert('Chúc mừng bạn tạo mới thành công');
        })

    }

})