import "./styles.css";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Aos from "aos";

const Services = () => {
  //

  const { state } = useLocation();

  var parent = useRef(null);
  var work = useRef(null);
  var couple = useRef(null);
  var marriage = useRef(null);
  var family = useRef(null);
  var divorce = useRef(null);
  var grif = useRef(null);
  var trauma = useRef(null);

  Aos.init({
    offset: 120,
    delay: 100,
    duration: 400,
    easing: "ease-in-out",
    once: false,
    mirror: false,
    anchorPlacement: "top-top",
  });

  const scrollFunction = (ref) => {
    //
    ref.current.scrollIntoView();
  };
  useEffect(() => {
    //

    if (state.id === "work") return scrollFunction(work);
    if (state.id === "divorce") return scrollFunction(divorce);
    if (state.id === "marriage") return scrollFunction(marriage);
    if (state.id === "family") return scrollFunction(family);
    if (state.id === "grif") return scrollFunction(grif);
    if (state.id === "trauma") return scrollFunction(trauma);
    if (state.id === "parent") return scrollFunction(parent);
    if (state.id === "couple") return scrollFunction(couple);
  }, [state.id]);

  return (
    <div id="aboutCtn" className="aboutWrapper">
      <div className="Alltext">
        <div className={"aboutHeading"}>
          <div className={"high"}>
            <h2 className={"h1"}>Learn More</h2>
            <div className={"lineTop"} />
          </div>
          <div className={"low"}>
            <div className={"Btm"} />
            <h2 className={"h1"}> be More</h2>
          </div>
        </div>
        <div className="wrapText">
          <div className="apple">
            <div ref={couple} className="moretext">
              <h2 className={"h1 my-2"}>Pre-marital counselling</h2>
              <p className={"para"}>
                Getting married is always an exciting rite of passage. There is
                planning the wedding, where you start planning for the day that
                you will make one of the greatest commitments of your life. But
                we sometimes neglect to focus on preparing for married life.
                <br />
                <br />
                Preparing for your future together is one of the most important
                choices a couple can make. We offer pre-marital counselling to
                couples who want commit into marriage and for a successful
                journey through marriage, you need to prepare for it.
                <br /> The counsellors at LUBANZI Counselling and Therapy (LCT)
                are trained in helping you plan for your marriage not just your
                wedding.
              </p>
            </div>

            <div ref={marriage} id="married" className="moretext">
              <h2 className={"h1 my-2"}>Marriage enrichment and counselling</h2>
              <p className={"para"}>
                Marriage, like a growing plant, needs continuous nurturing,
                support and love to keep it growing and if we don’t, marriage
                may not grow and eventually die. Marriage can be challenging at
                times. <br /> Unfortunately, we do not always achieve the
                happiness we want from our marriage. At times we neglect
                exploring our relationship with our partner. We can help you
                grow and nurture your relationship. <br />
                <br /> Our counsellors will help you explore the areas in your
                relationship, which might need some growth. We can guide you,
                through fun and interactive exercises, to build your
                relationship. <br /> <br /> LCT helps married and unmarried (in
                cohabitation) couples to build on strengths and deal with
                problematic areas of relationships more effectively. The helping
                process facilitates increased communication skills, helping you
                to increase your intimacy.
              </p>
            </div>

            <div ref={parent} id="parent" className="moretext">
              <h2 className={"h1"}>Relationships counselling</h2>
              <p className={"para"}>
                All relationships at times go through difficulties and we all
                need relationships to be human. We can help you strengthen your
                relationships with your significant others like family and
                friends even if you feel you do not have any concerning
                relationship problems. <br />
                <br /> You will talk to someone trained in relationship
                counselling to help you explore, understand and improve your
                relationships. Our counsellors will support you in a
                non-judgmental way.
              </p>
            </div>

            <div ref={family} id="family" className="moretext">
              <h2 className={"h1"}>Family counselling</h2>
              <p className={"para"}>
                Families sometimes go through stresses such as divorce, illness,
                death, financial strain or even trauma. This can lead to
                conflict and relationship breakdown. We often feel as though we
                go through these problems alone. It is not easy to get through
                hardships as a family. <br />
                <br /> When we go through hardships, family support is often the
                one thing you can count on. But, sometimes our families just
                need a little help to become the pillar of strength we need.{" "}
                <br />
                Being part of a family can be a wonderful experience. However,
                even in families that are generally strong and supportive, there
                can be problems or issues that we struggle to deal with. <br />
                <br /> At times, we might also feel lonely, distant and unheard.
                In family counselling everyone gets a say and gets heard. We
                provide a safe space with a trained counsellor in order to help
                you explore the difficulties in your family, even if it seems
                insignificant. <br /> You will work together with your
                counsellor to strengthen the relationships within your family,
                and explore ways in which you as a family can work together in
                order to deal with your problems. <br /> At LUBANZI Counselling
                and Therapy, we assist family members improve communication,
                solve family problems, understand and handle special family
                situations (for example, death, serious physical or mental
                illness, or child and adolescent issues), and create a better
                functioning home environment.
              </p>
            </div>

            <div ref={divorce} className="moretext">
              <h2 className={"h1"}>Divorce counselling</h2>
              <p className={"para"}>
                Ending a relationship can be a very painful and traumatic
                process. <br />
                <br /> Not only do we lose the person who made out such a large
                part of our lives, but we also lose everything about him or her.
                We can suffer the loss of families, income, our house, our
                neighbourhood, friends, the loss of a partner and friend, and so
                much more. <br />
                <br /> Considering whether or not to end a relationship can also
                be very stressful. Sometimes our relationships can be very
                conflicted, filled with hurt and abuse. <br /> At times we might
                feel that we just want to end the relationship and start over.
                However, we also hesitate as we still love our partner so much
                and there are so many good memories as well. Ending a
                relationship is a very big decision. <br />
                <br /> Sometimes this is a decision that we are not always able
                to make by ourselves. There are so many things that we have to
                consider like our families, our children, where we are going to
                stay, what are our friends going to think, what are our
                community going to think and say. <br />
                <br />
                Our counsellors will guide you through the decision-making
                process whilst helping you to consider all the factors relating
                to ending a relationship. Our counsellors will support you in
                the warm and caring environment that you at times so desperately
                want. <br /> Unfortunately divorce effects so much more people
                than just ourselves. LUBANZI Counselling and Therapy offers you
                the opportunity to come for counselling with you partner or
                family. <br />
                <br />
                <br />
                Although it is not always that easy to accept, our partners are
                also part of the decision to end a relationship or not to. It
                can be of great value having our partners as part of the
                decision-making process. <br /> We also offer a mediation
                service to help you and your partner make those important
                decisions regarding your children, access, finances and other
                important decisions that need to be made in your divorce.
                Mediation can often be more cost effective than the traditional
                legal route.
              </p>
            </div>

            <div ref={trauma} id="trauma" className="moretext">
              <h2 className={"h1"}>Trauma counselling and debriefing </h2>
              <p className={"para"}>
                Trauma occurs when we are exposed to a life-threatening event.
                It often has devastating effects on our life. Trauma can have a
                range of short term and long-term effects, not always only on
                the individual who has experienced the trauma but also at times
                on those close to the person. <br />
                <br /> We sometimes are not aware of these effects until much
                later. <br /> Trauma is usually an experience we would prefer to
                forget. Unfortunately, this is not always possible or helpful.
                Intervention can be of great help after you have experienced
                trauma. <br />
                <br />
                <br /> Talking about the traumatic event in a safe and
                supportive environment with a warm, understanding and
                non-judgmental counsellor can help you deal with the effects of
                the trauma. We can help you make sense of the traumatic
                experience, looking at why we react the way we do and why our
                bodies react as they do. <br />
                <br /> Our counsellors will help you to look at how to cope with
                the effects of the traumatic event and how to start the healing
                process. We understand that talking about trauma can be painful
                at times. <br /> Our counsellors are there for you to help make
                the process of healing an enriching one. We offer trauma
                defusing, trauma debriefing, and trauma counselling for those
                who are affected by trauma. We can assist you in dealing with
                trauma whether it happened recently or years ago. <br />
                <br />
                The effects of trauma can be long lasting. Starting the process
                of healing is of benefit to yourself as well as those you love.
                We can help you identify and come to terms with the feelings you
                experience during and after the traumatic event. Trauma can
                change us and also decrease the chances of healthier
                relationships. <br /> It can leave us feeling angry and fearful,
                often hurting those close to us and avoiding the things and
                people we love. Take control of your life by talking to one of
                our counsellors and starting the healing process.
              </p>
            </div>

            <div ref={grif} id="grif" className="moretext">
              <h2 className={"h1"}>Bereavement counselling </h2>
              <p className={"para"}>
                Sometimes we only discover much later in life that we have not
                dealt with our losses. This could lead to obstacles in our
                ability to form, develop and maintain meaningful relationships.{" "}
                <br />
                We help people to cope with loss, grief and bereavement by
                taking them through the process of healing after the loss of a
                loved one. <br />
                <br /> We are unable to take away the loss or grief feelings but
                our highly experienced and trained counsellors will walk
                alongside you through your journey of grief, whether you come to
                us as an individual, couple or family. <br /> Each person deals
                with loss in their own unique way which is neither “right” nor
                “wrong”. <br />
                <br /> Some may respond to the loss immediately, while others
                may take longer. There is no definite time frame within which
                people need to come for counselling. Some come soon after the
                loss, whilst others may realize they have unresolved grief much
                further down the line.
              </p>
            </div>

            <div ref={work} id="work" className="moretext">
              <h2 className={"h1"}>Employee Wellness Programme </h2>
              <p className={"para"}>
                This programme is designed to assist your employees to increase
                workplace productivity. Unhealthy or dysfunctional relationships
                make unproductive employees. <br /> A company’s employees are
                the most valuable asset. Unhappy employees however can also be
                your greatest liability. All individuals will at some point face
                a situation that will overwhelm their normal coping mechanisms.{" "}
                <br /> <br />
                Counselling is an effective way to support the individual to
                gain perspective and once again feel in control. Our counsellors
                are able to support your employees to return to their full
                potential. <br /> <br /> Trauma debriefing, support and
                counselling for your employees <br /> <br /> Violence and other
                social ills are daily occurrences in our society, for example,
                being held hostage in an armed robbery, hijacking, sudden
                unexpected death, an accident, but to name only a few. <br />
                <br /> When individuals or groups experience such an event, they
                are often traumatized. Trauma can have devastating effects on
                the victim, which can impact negatively on productivity along
                with all other areas of their life. <br /> It is imperative to
                address trauma as soon as possible in order to minimise the
                long-term effects on the individual and those around them.{" "}
                <br />
                <br /> Businesses can be greatly affected by trauma. Robberies
                and hi-jacking are an all, too familiar fear for any business
                owner, manager and employee. Trauma can have a devastating
                effect on the productivity of any business. <br />
                <br /> We understand that experiencing a traumatic event can
                affect the performance of employees and employers alike. We know
                that as a caring employer you want your employees to be the best
                they can be. <br /> We can assist you and your business in
                helping to bring about healing for you and your employees after
                a traumatic event. Trauma Debriefing can be done at your company
                or at one of our offices.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Svgmorph
        bg="linear-gradient(to right, #f5f7fa, #c3cfe2)"
        colors={{
          color1: "#E0C3FC",
          color2: "#8EC5FC",
          color3: "#D4FC79",
          color4: "#96E6A1",
          color5: "#CFD9DF",
          color6: "#E2EBF0",
          color7: "#A1C4FD",
          color8: "#C2E9FB",
        }}
      /> */}
    </div>
  );
};

export default Services;
