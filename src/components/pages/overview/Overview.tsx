import { Button } from "../../button/Button";
import Pagination from "../../pagination/Pagination";
import EntityListItem from "../../entityListItem/EntityListItem";
import CaretRight from "../../../assets/images/icon-caret-right.svg?react";

export default function Overview() {
  return (
    <section className="overview">
      <Button onClick={() => {}} disabled={false} className={"primary"}>
        <span>Placeholder</span>
      </Button>

      <Button onClick={() => {}} className={"secondary"}>
        <span>Placeholder</span>
      </Button>
      <Button onClick={() => {}} className={"tertiary"}>
        <span>
          Placeholder
          <CaretRight className="icon" />
        </span>
      </Button>

      <Button onClick={() => {}} disabled={false} className={"destroy"}>
        <span>Placeholder</span>
      </Button>
      <div>
        <EntityListItem
          entityVisual="/avatars/aqua-flow-utilities.jpg"
          entityTitle="Aqua Flow Utilities - Bills"
        ></EntityListItem>

        <EntityListItem
          entityVisual="/avatars/emma-richardson.jpg"
          entityTitle="Emma Richardson - General"
        ></EntityListItem>
      </div>

      <Pagination></Pagination>
      <div>
        <h1>Content de umplutura</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          assumenda mollitia minus velit impedit nemo laborum asperiores sunt
          soluta, non tenetur esse facere ipsam ut quas necessitatibus, nesciunt
          alias itaque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          assumenda mollitia minus velit impedit nemo laborum asperiores sunt
          soluta, non tenetur esse facere ipsam ut quas necessitatibus, nesciunt
          alias itaque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          assumenda mollitia minus velit impedit nemo laborum asperiores sunt
          soluta, non tenetur esse facere ipsam ut quas necessitatibus, nesciunt
          alias itaque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          assumenda mollitia minus velit impedit nemo laborum asperiores sunt
          soluta, non tenetur esse facere ipsam ut quas necessitatibus, nesciunt
          alias itaque.
        </p>
        <p>ultimul paragraf</p>
      </div>
    </section>
  );
}
