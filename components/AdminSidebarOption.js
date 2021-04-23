import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  iconStyle: {
    "& > svg": {
      width: 60,
      height: 60,
    },
  },
});
function AdminSidebarOption({ icon, text, selected }) {
  console.log(selected);
  const styles = useStyles();
  return (
    <div
      className={`flex ml-20 py-4 pl-12 mb-4 rounded-l-full text-gray-600 hover:bg-red-50  ${
        selected && "bg-red-50"
      }`}
    >
      <div className={styles.iconStyle}>{icon}</div>
      <h3 className="text-4xl font-bold mt-2 ml-4">{text}</h3>
    </div>
  );
}

export default AdminSidebarOption;
