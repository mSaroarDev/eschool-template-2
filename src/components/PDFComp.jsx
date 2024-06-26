import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import convertDateFormat from "../utils/convertDate";
import convertToBanglaNumber from "../utils/convertNumbertoBangla";

// Register font
Font.register({ family: "BanglaFont", src: "/fonts/solaimanlipi.woff" });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: "30px",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontFamily: "BanglaFont",
  },
  subject: {
    fontFamily: "BanglaFont",
    marginTop: "30px",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  w_80: {
    flex: 1,
    padding: 10,
  },
  w_20: {
    flex: 0.2,
    padding: 10,
  },
  pic: {
    objectFit: "cover", // Optional styling for the image
    width: "80px", // Optional styling for the image
    height: "auto", // Optional styling for the image
    border: "1px",
    borderColor: "black",
  },
  app_text: {
    flex: 1,
    flexGrow: 1,
  },
});

// Create Document Component
const PDFComp = ({ data }) => (
  <Document title={`আবেদন প্রিন্ট - ${data && data?.name_en} - ${data && data?.institute?.name_bn}`}>
    <Page size="A4" style={styles.page}>
      <View style={styles.flex}>
        <View style={{ ...styles.w_80, marginTop: "10px" }}>
          <Text style={styles.title}>বরাবর</Text>
          <Text style={styles.title}>মাননীয় প্রধান শিক্ষক</Text>
          <Text style={styles.title}>{data && data?.institute?.name_bn}</Text>
          <Text style={styles.title}>
            {data && data?.institute?.institute_address}।
          </Text>
          <Text style={styles.subject}>
            বিষয়ঃ নতুন শ্রেনীতে ভর্তির আবেদন প্রসঙ্গে।{" "}
          </Text>

          <View style={{ width: "100%" }}>
            <Text
              style={{
                fontFamily: "BanglaFont",
                marginTop: "20px",
                textAlign: "justify",
              }}
            >
              {`সবিনয় নিবেদন এই যে, আমি একজন নিয়মিত শিক্ষার্থী। ${
                data?.admission_info?.previous_institute &&
                `  আমি ইতিপূর্বে ${data?.admission_info?.previous_institute}-এ ${data?.admission_info?.previous_classe}-তে অধ্যয়নরত ছিলাম। `
              }  বর্তমানে আপনার প্রতিষ্ঠানে নতুন সেশনে ${
                data?.admission_info?.classe
              }- তে ভর্তি হয়ে পড়াশোনা করতে ইচ্ছুক মর্মে আবেদন করছি।  নিম্নে একজন শিক্ষার্থী হিসেবে আমার প্রয়োজনীয় তথ্যাদি দিয়ে আবেদন ফরমটি পুরন করে আপনার বরাবর জমা প্রদান করলাম।`}
              ।
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১)  আবেদনকারীর নাম (বাংলায়)`}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${data && data?.name_bn} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(২)  নাম (ইংরেজীতে)`}</Text>
            <Text>:</Text>
            <Text
              style={{
                flex: 8,
                fontFamily: "BanglaFont",
                marginLeft: 10,
                textTransform: "uppercase",
              }}
            >{`${data && data?.name_en} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(৩)  পিতার নাম`}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${data && data?.father_name} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(৪)  মাতার নাম`}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${data && data?.mother_name} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(৫)  জন্ম তারিখ`}</Text>
            <Text>:</Text>
            <Text
              style={{
                flex: 8,
                fontFamily: "BanglaFont",
                marginLeft: 10,
                textTransform: "uppercase",
              }}
            >{`${data && data?.dob} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(৬)  লিঙ্গ `}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${data && data?.gender} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(৭)  স্থায়ী ঠিকানা`}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${data && data?.permanent_address} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(৮)  বর্তমান ঠিকানা`}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${data && data?.present_address} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(৯)  জাতীয়তা`}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`বাংলাদেশী`}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১০)  ধর্ম`}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`ইসলাম`}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১১)  রক্তের গ্রুপ  `}</Text>
            <Text>:</Text>
            <Text
              style={{
                flex: 8,
                fontFamily: "BanglaFont",
                marginLeft: 10,
              }}
            >{`${data && data?.blood_group} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১২)  জন্ম নিবন্ধন নং `}</Text>
            <Text>:</Text>
            <Text
              style={{
                flex: 8,
                fontFamily: "BanglaFont",
                marginLeft: 10,
                textTransform: "uppercase",
              }}
            >{`${data && data?.birth_reg_no} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১৩)  পিতার আইডি নং `}</Text>
            <Text>:</Text>
            <Text
              style={{
                flex: 8,
                fontFamily: "BanglaFont",
                marginLeft: 10,
                textTransform: "uppercase",
              }}
            >{`${data && data?.father_nid} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১৪)  মোবাইল নং `}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`০১৭৯৮৪৫৬৩৮০`}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 25,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১৫)  ভর্তিচ্ছু শ্রেনী `}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${data && data?.admission_info?.classe} `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১৬)  ভর্তিচ্ছু বিভাগ `}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${
              (data && data?.admission_info?.department) || "প্রযোজ্য নয়"
            } `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 25,
            }}
          >
            <Text
              style={{ flex: 4, fontFamily: "BanglaFont" }}
            >{`(১৭)  পূর্ববর্তী তথ্য `}</Text>
            <Text>:</Text>
            <Text
              style={{ flex: 8, fontFamily: "BanglaFont", marginLeft: 10 }}
            >{`${
              data && data?.admission_info?.previous_institute
                ? `${data?.admission_info?.previous_institute}, ${data?.admission_info?.previous_classe}, রোল নং- ${data?.admission_info?.previous_roll_no}`
                : "প্রযোজ্য নয়"
            } `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <Text
              style={{ flex: 12, fontFamily: "BanglaFont" }}
            >{`অতএব, মহোদয় উপরোক্ত তথ্যের আলোকে আমাকে আপনার প্রতিষ্ঠানে ভর্তি হওয়ার অনুমতিদানে আপনার সদয় মর্জি হয়।    `}</Text>
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 60,
            }}
          >
            <Text style={{ flex: 10, fontFamily: "BanglaFont" }}>{``}</Text>
            <Image
              style={{
                width: 100,
                height: 26,
              }}
              src={data && data?.student_sign}
            />
          </View>

          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text
              style={{ flex: 10, fontFamily: "BanglaFont" }}
            >{`তারিখঃ ${convertDateFormat(
              data && data?.created_at
            )} খ্রিঃ`}</Text>
            <Text
              style={{ flex: 2, marginLeft: 10, fontFamily: "BanglaFont" }}
            >{`বিনীত নিবেদক`}</Text>
          </View>

          {/* সংযুক্তি */}
        </View>
      </View>

      <Image
        style={{
          position: "absolute",
          top: "30px",
          right: "30px",
          width: 100,
          height: 100,
          border: "1px",
          borderColor: "black",
        }}
        src={data && data?.student_image}
      />

      <Text
        style={{
          width: "100%",
          position: "absolute",
          top: "20px",
          left: 40,
          fontFamily: "BanglaFont",
          marginBottom: "50px"
        }}>
          আবেদন ট্র্যাকিং নং- {convertToBanglaNumber(data && data?.admission_tracking_no)}
        </Text>
    </Page>
  </Document>
);

export default PDFComp;
