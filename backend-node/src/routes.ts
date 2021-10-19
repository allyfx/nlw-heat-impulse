import { Router } from 'express';

import { AuthenticateUserController } from './controller/AuthenticateUserController';
import { CreateMessageController } from './controller/CreateMessageController';
import { GetLastThreeMessagesController } from './controller/GetLastThreeMessagesController';
import { ProfileUserController } from './controller/ProfileUserController';

import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last-three", new GetLastThreeMessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };
