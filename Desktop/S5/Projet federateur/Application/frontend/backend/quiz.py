
class Quiz(db.Model):
      id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    question = db.Column(db.String, unique=True, nullable=False)
    reponse1 = db.Column(db.String, unique=True, nullable=False)
    reponse2 = db.Column(db.String, unique=True, nullable=False)
    reponse3 = db.Column(db.String, unique=True, nullable=False)
    reponse4 = db.Column(db.String, unique=True, nullable=False)
    real_answer = db.Column(db.String, unique=True, nullable=False)

    def create_database(db) :
      with app.app_context():
        db.create_all()
    def add_data(data) :
      with app.app_context():
        db.session.add(data)
        db.session.commit()

    def format(self) :
      return {
        "id" : self.id,
        "question" : self.question,
        "reponse1" : self.reponse1,
        "reponse2" : self.reponse2,
        "reponse3" : self.reponse3,
        "reponse4" : self.reponse4,
        "real_answer" : self.real_answer,
      }