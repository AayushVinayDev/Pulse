import prisma from "../config/db.config.js";
class ChatGroupController {
    static async index(req, res) {
        try {
            const user = req.user;
            const groups = await prisma.chatgroup.findMany({
                where: {
                    user_id: user.id,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
            return res.json({ data: groups });
        }
        catch (error) {
            return res
                .status(500)
                .json({ message: "Something went wrong.please try again!" });
        }
    }
    static async show(req, res) {
        try {
            const { id } = req.params;
            if (id) {
                const group = await prisma.chatgroup.findUnique({
                    where: {
                        id: id,
                    },
                });
                return res.json({ data: group });
            }
            return res.status(404).json({ message: "No groups found" });
        }
        catch (error) {
            return res
                .status(500)
                .json({ message: "Something went wrong.please try again!" });
        }
    }
    static async store(req, res) {
        try {
            const body = req.body;
            const user = req.user;
            await prisma.chatgroup.create({
                data: {
                    title: body?.title,
                    passcode: body?.passcode,
                    user_id: user.id,
                },
            });
            return res.json({ message: "Chat Group created successfully!" });
        }
        catch (error) {
            return res
                .status(500)
                .json({ message: "Something went wrong.please try again!" });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            if (id) {
                await prisma.chatgroup.update({
                    data: body,
                    where: {
                        id: id,
                    },
                });
                return res.json({ message: "Group updated successfully!" });
            }
            return res.status(404).json({ message: "No groups found" });
        }
        catch (error) {
            return res
                .status(500)
                .json({ message: "Something went wrong.please try again!" });
        }
    }
    static async destroy(req, res) {
        try {
            const { id } = req.params;
            await prisma.chatgroup.delete({
                where: {
                    id: id,
                },
            });
            return res.json({ message: "Chat Deleted successfully!" });
        }
        catch (error) {
            return res
                .status(500)
                .json({ message: "Something went wrong.please try again!" });
        }
    }
}
export default ChatGroupController;
