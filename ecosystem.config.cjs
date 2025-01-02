module.exports = {
    apps: [
        {
            name: "3nana",         // Tên của ứng dụng
            port: 3021,               // Cổng mà ứng dụng sẽ chạy
            exec_mode: "cluster",     // Chạy dưới dạng cluster để tận dụng nhiều CPU
            instances: "max",         // Chạy với tối đa các nhân CPU có sẵn
            script: "yarn",           // Sử dụng yarn để khởi động ứng dụng
            args: "start",            // Lệnh để khởi động Nuxt.js từ file build
            cwd: "./",                // Thư mục làm việc
            env: {
                NODE_ENV: "development" //"production"  // Đặt môi trường production
            },
            log_date_format: "YYYY-MM-DD HH:mm Z", // Định dạng thời gian log
        }
    ]
}
