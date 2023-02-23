import axios from 'axios';

export default async (req, res) => {
    const { dataForCrm } = req.body;

    try {
        const response = await axios.post('https://crm.wbooster.ru/index.php?controller=seolead', dataForCrm);

        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
