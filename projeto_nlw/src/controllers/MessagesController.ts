import { Request, Response, response } from "express";
import { MessagesService } from "../services/MessagesServide";
class MessagesController {
  async create(req: Request, res: Response) {
    const messagesService = new MessagesService();
    const { admin_id, text, user_id } = req.body;
    const messages = await messagesService.create({
      admin_id,
      text,
      user_id,
    });
    return res.json(messages);
  }

  async showByUser(req: Request, res: Response) {
    const { id } = req.params;
    const messagesService = new MessagesService();
    const list = await messagesService.listByUser(id);
    return res.json(list);
  }
}
export { MessagesController };
