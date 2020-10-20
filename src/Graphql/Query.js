import { gql } from "@apollo/client";

export const ALL_SCORE = gql`
  query allscore($level:String) {
    Scores(level:$level) {
      username
      points
    }
  }
`;

export const ADD_SCORE = gql`
  mutation addscore($data: InputScore!) {
    addScore(user: $data){
      username
      points
      level
    }
  }
`;
