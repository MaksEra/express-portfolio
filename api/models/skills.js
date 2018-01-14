/*'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SkillsSchema = new Schema({
      name: {
        type: String,
        required: [true, 'Укажите название навыка']
      },
      percents: {
        type: Number,
        required: [true, 'Укажите процент скилла']
      },
      type: {
        type: Number
      },
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skills', SkillsSchema);*/