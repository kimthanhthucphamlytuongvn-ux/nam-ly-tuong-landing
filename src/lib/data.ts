import type {
  CategoryFilter,
  OcopRow,
  Product,
  StatItem,
  TimelineItem,
  UspItem,
  ValueItem,
  WorryItem,
} from "./types";

/**
 * All copy below is sourced from thucphamlytuong.vn, the company's OCOP
 * certificates (2023 & 2025) and its internal product sheet — nothing is
 * invented. The contact hotline is the real company hotline.
 */

export const CONTACT = {
  hotlinePrimary: { display: "0989.333.415", tel: "0989333415" },
  hotlineSecondary: { display: "0936.195.322", tel: "0936195322" },
  website: "namlytuong.vn (sắp ra mắt)",
  addressHN: "915 đường Hồng Hà, phường Hồng Hà, Hà Nội",
  showroom: "Showroom: 3A Lê Thái Tổ, Hoàn Kiếm, Hà Nội",
  addressHCM: "Chi nhánh TP.HCM: 8/5 Nguyễn Hiến Lê, Tân Bình",
  legalName: "Công ty TNHH Hai Thành viên Thực phẩm Lý Tưởng Việt Nam",
  bizLicense: "ĐKKD số 0105982699",
  bizLicenseDate: "Cấp ngày 29/08/2012 — Sở KH&ĐT TP. Hà Nội",
};

export const heroStats: StatItem[] = [
  { value: "14+", label: "năm cùng bữa ăn Việt" },
  { value: "~100", label: "sản phẩm từ nấm" },
  { value: "22", label: "chứng nhận OCOP 3–4 sao" },
  { value: "Top 1–2", label: "thị phần nấm miền Bắc" },
];

export const worries: WorryItem[] = [
  {
    question: "“Cây nấm này trồng ở đâu, ai làm ra nó?”",
    answer:
      "Phần lớn nấm bán trôi nổi không có thông tin vùng trồng, đơn vị sản xuất hay hạn sử dụng rõ ràng.",
  },
  {
    question: "“Có chứng nhận an toàn thực phẩm thật không?”",
    answer:
      "Niềm tin bị bào mòn khi nhãn mác dễ làm giả, còn giấy chứng nhận thì không ai kiểm chứng được.",
  },
  {
    question: "“Mua ở đâu để chắc chắn là hàng thật?”",
    answer:
      "Đặt hàng online sợ nhận sai sản phẩm, ra chợ thì không biết hỏi ai để yên tâm.",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2012",
    text: "Chị Vũ Hoài Thu thành lập Nấm Lý Tưởng, quyết định gác lại sự nghiệp quản lý cấp cao để dấn thân vào nông nghiệp sạch.",
  },
  {
    year: "Những năm đầu",
    text: 'Tiên phong làm "chứng minh thư" truy xuất nguồn gốc cho từng cây nấm, đưa nông sản an toàn lên kệ các hệ thống siêu thị lớn nhất cả nước.',
  },
  {
    year: "Hơn 1 thập kỷ",
    text: "Mở rộng thành hệ sinh thái gần 100 sản phẩm: từ nấm tươi, nấm khô, chà bông nấm đến các dòng snack nấm tiện lợi.",
  },
  {
    year: "2023 & 2025",
    text: "22 sản phẩm liên tiếp đạt chứng nhận OCOP 3–4 sao, khẳng định chất lượng bằng con số cụ thể chứ không chỉ lời nói.",
  },
];

export const uspItems: UspItem[] = [
  {
    num: "01",
    title: "Nguồn gốc rõ ràng, có kiểm chứng",
    desc: "Không chỉ là lời cam kết — mỗi sản phẩm đều gắn với hồ sơ chứng nhận thật.",
    points: [
      "22 sản phẩm đạt OCOP 3–4 sao (2023 & 2025)",
      "Chứng nhận HACCP về an toàn vệ sinh thực phẩm",
      "Có tên trong Chuỗi cung ứng nông sản an toàn – Bộ NN&PTNT",
    ],
  },
  {
    num: "02",
    title: "Liên hệ đặt hàng nhanh chóng",
    desc: "Một cuộc gọi hoặc một tin nhắn là đủ — không cần chờ đợi, không cần trung gian.",
    points: [
      "Hotline tư vấn trực tiếp 24/7",
      "Đặt hàng qua website, Shopee, TikTok Shop, Lazada",
      "Giao hàng tận nơi, đóng gói giữ độ tươi",
    ],
  },
  {
    num: "03",
    title: "Có mặt ở khắp mọi nơi",
    desc: "Từ showroom đến hệ thống siêu thị lớn nhỏ trên toàn quốc.",
    points: [
      "Top 1–2 thị phần nấm tại miền Bắc",
      "Phân phối tại Aeon, Big C, Lotte, Co-opmart, WinMart…",
      "Văn phòng tại Hà Nội & TP.HCM, showroom tại phố cổ Hà Nội",
    ],
  },
];

export const categoryFilters: CategoryFilter[] = [
  { label: "Tất cả", value: "all" },
  { label: "Nấm tươi", value: "tuoi" },
  { label: "Nấm khô", value: "kho" },
  { label: "Đồ khô & gia vị", value: "gia-vi" },
  { label: "Thực phẩm từ nấm", value: "che-bien" },
  { label: "Đồ ăn chế biến sẵn", value: "san-san" },
];

export const products: Product[] = [
  {
    id: "nam-huong-tuoi-200g",
    category: "tuoi",
    categoryLabel: "Nấm tươi",
    name: "Nấm Hương Tươi 200g",
    desc: "Vị đậm, giàu dinh dưỡng, hợp xào, nấu canh, nấu cháo.",
    price: "37.800₫",
    icon: "mushroom",
  },
  {
    id: "dong-trung-ha-thao-100g",
    category: "tuoi",
    categoryLabel: "Nấm tươi",
    name: "Nấm Đông Trùng Hạ Thảo Tươi 100g",
    desc: "Sản phẩm được mua nhiều nhất — bồi bổ sức khỏe mỗi ngày.",
    price: "68.250₫",
    icon: "mushroom",
  },
  {
    id: "nam-moi-100g",
    category: "tuoi",
    categoryLabel: "Nấm tươi",
    name: "Nấm Mối 100g",
    desc: "Nấm mối tự nhiên, vị ngọt thanh, khan hiếm theo mùa.",
    price: "57.750₫",
    icon: "mushroom",
  },
  {
    id: "nam-tuyet-trang-70g",
    category: "tuoi",
    categoryLabel: "Nấm tươi",
    name: "Nấm Tuyết Trắng 70g",
    desc: "Thanh mát, thường dùng chưng yến, nấu chè, nấu canh bổ dưỡng.",
    price: "58.800₫",
    icon: "mushroom",
  },
  {
    id: "nam-loc-nhung-kho-100g",
    category: "kho",
    categoryLabel: "Nấm khô",
    name: "Nấm Lộc Nhung Khô 100g",
    desc: "Dễ bảo quản lâu dài, tiện lợi cho tủ bếp mọi gia đình.",
    price: "54.600₫",
    icon: "mushroom",
  },
  {
    id: "toi-den-200g",
    category: "gia-vi",
    categoryLabel: "Đồ khô & gia vị",
    name: "Tỏi Đen Lý Tưởng 200g",
    desc: "Lên men tự nhiên, vị chua ngọt dịu, hỗ trợ tăng đề kháng.",
    price: "162.000₫",
    icon: "mushroom",
  },
  {
    id: "mien-lau-300g",
    category: "gia-vi",
    categoryLabel: "Đồ khô & gia vị",
    name: "Miến Lẩu Lý Tưởng 300g",
    desc: "Bạn đồng hành hoàn hảo cho set lẩu nấm cả gia đình.",
    price: "52.920₫",
    icon: "leaf",
  },
  {
    id: "cha-bong-nam-huong-100g",
    category: "che-bien",
    categoryLabel: "Thực phẩm từ nấm",
    name: "Chà Bông Nấm Hương Lý Tưởng 100g",
    desc: "Đạt chứng nhận OCOP 4 sao — thơm bùi, ăn cùng cơm hoặc xôi.",
    price: "81.000₫",
    ocop: true,
    icon: "mushroom",
  },
  {
    id: "snack-nam-huong-30g",
    category: "san-san",
    categoryLabel: "Đồ ăn chế biến sẵn",
    name: "Snack Nấm Hương Chiên Giòn 30g",
    desc: "Đạt chứng nhận OCOP 4 sao — ăn vặt lành mạnh cho cả nhà.",
    price: "41.040₫",
    ocop: true,
    icon: "mushroom",
  },
  {
    id: "kho-bo-chay-60g",
    category: "san-san",
    categoryLabel: "Đồ ăn chế biến sẵn",
    name: "Khô Bò Chay Cháy Tỏi 60g",
    desc: "Làm từ nấm, vị cay nồng tỏi ớt, phù hợp người ăn chay.",
    price: "31.320₫",
    icon: "mushroom",
  },
  {
    id: "banh-da-nem-nam-200g",
    category: "san-san",
    categoryLabel: "Đồ ăn chế biến sẵn",
    name: "Bánh Đa Nem Nấm Lý Tưởng 200g",
    desc: "Đạt chứng nhận OCOP 4 sao — mỏng, giòn, dễ cuốn nem.",
    price: "43.200₫",
    ocop: true,
    icon: "leaf",
  },
  {
    id: "sam-han-quoc-100g",
    category: "gia-vi",
    categoryLabel: "Đồ khô & gia vị",
    name: "Sâm Hàn Quốc 100g",
    desc: "Nguyên liệu bồi bổ cao cấp, phù hợp làm quà biếu sức khỏe.",
    price: "240.450₫",
    icon: "mushroom",
  },
];

export const values: ValueItem[] = [
  {
    letter: "S",
    title: "Sạch",
    desc: "Chất lượng và an toàn vệ sinh thực phẩm là cốt lõi — sạch từ trang trại đến bàn ăn.",
  },
  {
    letter: "S",
    title: "Sáng tạo",
    desc: "Liên tục nghiên cứu, phát triển các dòng sản phẩm chế biến sâu mang tính đột phá.",
  },
  {
    letter: "S",
    title: "Sinh thái",
    desc: "Tối ưu quy trình sản xuất tuần hoàn, giảm rác thải, bảo vệ môi trường.",
  },
  {
    letter: "S",
    title: "Sẻ chia",
    desc: "Hỗ trợ sinh kế cho nông dân, mang lại giá trị thiết thực cho cộng đồng.",
  },
];

export const ocopRows: OcopRow[] = [
  { n: "10", label: "sản phẩm OCOP 3 sao — cấp quận, 2023" },
  { n: "5", label: "sản phẩm OCOP 4 sao — cấp thành phố, 2023" },
  { n: "7", label: "sản phẩm OCOP 4 sao — cấp thành phố, 2025" },
  { n: "22", label: "tổng số sản phẩm đạt chuẩn OCOP", isTotal: true },
];

export const marketLogos: string[] = [
  "Aeon",
  "Aeon Max Valu",
  "Big C",
  "Tops Market",
  "GO!",
  "Lotte Mart",
  "Co-opmart",
  "Co-op Food",
  "BRG Mart",
  "Fujimart",
  "MM Mega Market",
  "Emart",
];

export const navLinks = [
  { href: "#story", label: "Câu chuyện" },
  { href: "#products", label: "Sản phẩm" },
  { href: "#trust", label: "Vì sao chọn chúng tôi" },
  { href: "#contact", label: "Liên hệ" },
];
