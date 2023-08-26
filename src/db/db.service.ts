import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import firebase, { ServiceAccount, firestore } from 'firebase-admin';
import { SaveReviewDto } from './models/save-review.model';
import { v4 as uuidv4 } from 'uuid';
import { Review } from './models/review.model';
import { inspect } from 'util';

@Injectable()
export class DbService implements OnModuleInit {
  private db: firestore.Firestore;
  private logger = new Logger('DbService');
  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    const serviceAccount: ServiceAccount = {
      projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
      clientEmail: this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),
      privateKey: this.configService.get<string>('FIREBASE_PRIVATE_KEY'),
    };
    firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccount),
    });
    this.db = firebase.firestore();
    this.logger.log(`Db connected successfully`);
  }

  async saveReviewData(data: SaveReviewDto) {
    const uuid = uuidv4();
    const review: Review = { ...data, uuid };
    const docRef = this.db.collection('reviews').doc(uuid);
    try {
      const result = await docRef.set(review);
      this.logger.log(
        `Review ${inspect(
          { review },
          { depth: null },
        )} saved at ${result.writeTime.toDate().toLocaleDateString('pt-br')}`,
      );
      return uuid;
    } catch (error) {
      this.logger.error(`saveReviewData error: ${inspect({ error })}`);
    }
  }
}
