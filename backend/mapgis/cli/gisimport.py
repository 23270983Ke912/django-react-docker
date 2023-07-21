# CLI:
# cd /var/lib/postgresql/data/
# ogr2ogr -f PostgreSQL PG:"host=localhost dbname=postgresgis user=postgres password=postgres" output2.geojson -nln "mapgis_suburbs" -append

import subprocess

def import_data_to_postgres():
    host = "localhost"
    dbname = "postgresgis"
    user = "postgres"
    password = "postgres"
    output_file = "output.json"
    table_name = "mapgis_surburbs"

    # Create the ogr2ogr command as a list of arguments
    ogr2ogr_cmd = [
        "ogr2ogr",
        "-f", "PostgreSQL",
        f"PG:host={host} dbname={dbname} user={user} password={password}",
        output_file,
        "-nln", table_name,
        "-append",
        "-nlt", "PROMOTE_TO_MULTI",  # Replace PROMOTE_TO_MULTI with appropriate geometry type if known
        "-lco", "GEOMETRY_NAME=wkb_geometry",  # Replace wkb_geometry with the actual geometry column name
        "-progress"  # Add the progress flag for debugging
    ]

    try:
        # Run the ogr2ogr command
        subprocess.run(ogr2ogr_cmd, check=True)
        print("Data imported successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        # Handle the error here if needed

if __name__ == "__main__":
    import_data_to_postgres()
