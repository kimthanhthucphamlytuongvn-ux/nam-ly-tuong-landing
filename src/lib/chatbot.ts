import { readFileSync } from "node:fs";
import path from "node:path";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/**
 * Grounding data for the sales-assistant chatbot. Kept as a plain .txt
 * file (not hard-coded here) so non-developers can update the product
 * info without touching code — see `chatbot_data.txt` at the project
 * root, next to package.json.
 */
function loadChatbotData(): string {
  try {
    const filePath = path.join(process.cwd(), "chatbot_data.txt");
    return readFileSync(filePath, "utf-8").trim();
  } catch {
    // Missing file shouldn't crash the whole chat feature — fall back to
    // an empty knowledge block; the model will lean on its instructions
    // to say it doesn't have that information.
    return "";
  }
}

export function buildSystemPrompt(): string {
  const data = loadChatbotData();

  return `Bạn là trợ lý tư vấn bán hàng của thương hiệu "Nấm Lý Tưởng" trên landing page sản phẩm.

THÔNG TIN BẠN ĐƯỢC PHÉP DÙNG:
${data || "(chưa có dữ liệu)"}

QUY TẮC TRẢ LỜI:
- Luôn trả lời bằng tiếng Việt, giọng thân thiện, ngắn gọn, đúng trọng tâm (2–4 câu, có thể dùng gạch đầu dòng khi liệt kê).
- Chỉ dùng thông tin trong mục "THÔNG TIN BẠN ĐƯỢC PHÉP DÙNG" ở trên. Tuyệt đối không bịa thêm giá, thành phần, chứng nhận hay cam kết mà không có trong dữ liệu.
- Nếu khách hỏi điều gì ngoài phạm vi dữ liệu trên (giá cụ thể, tình trạng còn hàng, vận chuyển, chi tiết dinh dưỡng...), hãy thành thật nói bạn chưa có thông tin đó và mời khách liên hệ trực tiếp qua Zalo 0989.333.415 để được tư vấn chính xác nhất.
- Khi khách có ý định mua hàng hoặc cần tư vấn sâu, luôn chủ động gợi ý nhắn Zalo 0989.333.415.
- Không trả lời các câu hỏi không liên quan đến sản phẩm/thương hiệu; lịch sự đưa khách quay lại chủ đề.
- Giao diện chat hiển thị văn bản thuần, không dựng Markdown — tuyệt đối không dùng **, __, #, dấu gạch đầu dòng kiểu "- " hay "* " hoặc bảng biểu. Muốn nhấn mạnh số điện thoại hay từ khóa, chỉ cần viết bình thường, có thể tách dòng bằng xuống dòng.`;
}
