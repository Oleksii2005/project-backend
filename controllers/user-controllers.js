import userService from "../services/user-services.js";
import ControllerWrapper from "../utils/ControllerWrapper.js";

const getCurrent = async (req, res) => {
  const { name, email, avatarURL, dailyNorma, gender } = req.user;

  res.json({
    name,
    email,
    avatarURL,
    dailyNorma,
    gender,
  });
};

const updateUserData = async (req, res) => {
  const { _id } = req.user;

  const { avatarURL } = await userService.updateUserDataService(_id, req.body);

  res.json({ avatarURL });
};

export default {
  getCurrent: ControllerWrapper(getCurrent),
  updateUserData: ControllerWrapper(updateUserData),
};
