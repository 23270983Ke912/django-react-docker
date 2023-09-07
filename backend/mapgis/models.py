from django.db import models
from django.contrib.gis.db import models as gismodels
# Create your models here.
"""    ogc_fid integer NOT NULL DEFAULT nextval('australia_subrub_ogc_fid_seq'::regclass),
    sal_code21 character varying COLLATE pg_catalog."default",
    sal_name21 character varying COLLATE pg_catalog."default",
    ste_code21 character varying COLLATE pg_catalog."default",
    ste_name21 character varying COLLATE pg_catalog."default",
    aus_code21 character varying COLLATE pg_catalog."default",
    aus_name21 character varying COLLATE pg_catalog."default",
    areasqkm21 double precision,
    loci_uri21 character varying COLLATE pg_catalog."default",
    shape_leng double precision,
    shape_area double precision,
    wkb_geometry geometry(Geometry,7844), """
class Suburbs(models.Model):
    ogc_fid = models.AutoField(primary_key=True)  # Adding the missing field
    sal_code21 = models.CharField(max_length=255,null=True)
    sal_name21 = models.CharField(max_length=255,null=True)  # Adding the missing field
    ste_code21 = models.CharField(max_length=255,null=True)
    ste_name21 = models.CharField(max_length=255,null=True)  # Adding the missing field
    aus_code21 = models.CharField(max_length=255,null=True)  # Adding the missing field
    aus_name21 = models.CharField(max_length=255,null=True)  # Adding the missing field
    areasqkm21 = models.FloatField(null=True)  # Double precision changed to FloatField
    loci_uri21 = models.CharField(max_length=255,null=True)  # Adding the missing field
    shape_leng = models.FloatField(null=True)  # Double precision changed to FloatField
    shape_area = models.FloatField(null=True)  # Double precision changed to FloatField
    wkb_geometry = gismodels.GeometryField(srid=7844,null=True)  # Adding the missing field and setting the SRID

    def __str__(self):
        return self.sal_name21


class SuburbData(models.Model):
    Suburb = models.CharField(max_length=255, null=True)
    SAL_CODE = models.CharField(max_length=10, primary_key=True)
    Median_age_of_persons = models.FloatField(null=True)
    Median_mortgage_repayment = models.FloatField(null=True)
    Median_total_personal_income = models.FloatField(null=True)
    Median_rent_weekly = models.FloatField(null=True)
    Median_total_family_income = models.FloatField(null=True)
    Average_number_of_persons_per_bedroom = models.FloatField(null=True)
    Median_total_household_income_weekly = models.FloatField(null=True)
    Average_household_size = models.FloatField(null=True)
    Counted_at_home_on_Census_Night = models.FloatField(null=True)
    Total_visitors = models.FloatField(null=True)
    Top1_Born_Place = models.CharField(max_length=255, null=True)
    Top2_Born_Place = models.CharField(max_length=255, null=True)
    Top3_Born_Place = models.CharField(max_length=255, null=True)
    Top1_Number = models.FloatField(null=True)
    Top2_Number = models.FloatField(null=True)
    Top3_Number = models.FloatField(null=True)
    Total_Number = models.FloatField(null=True)
    Buddhism = models.FloatField(null=True)
    Christianity = models.FloatField(null=True)
    Hinduism = models.FloatField(null=True)
    Islam = models.FloatField(null=True)
    Judaism = models.FloatField(null=True)
    Other_Religions = models.FloatField(null=True)
    Other_and_No_Religious_Affiliation = models.FloatField(null=True)
    Religious_affiliation_not_stated = models.FloatField(null=True)
    Year_12_or_equivalent = models.FloatField(null=True)
    Year_11_or_equivalent = models.FloatField(null=True)
    Year_10_or_equivalent = models.FloatField(null=True)
    Year_9_or_equivalent = models.FloatField(null=True)
    Year_8_or_below = models.FloatField(null=True)
    Did_not_go_to_school = models.FloatField(null=True)
    Highest_year_of_school_not_stated = models.FloatField(null=True)
    Total = models.FloatField(null=True)
    None_of_the_selected_conditions = models.FloatField(null=True)
    Long_term_health_conditions = models.FloatField(null=True)
    Own_child_children_only = models.FloatField(null=True)
    Own_child_children_and_other_children = models.FloatField(null=True)
    Other_children_only = models.FloatField(null=True)
    Total_employed = models.FloatField(null=True)
    Total_unemployed = models.FloatField(null=True)
    Not_in_the_labour_force = models.FloatField(null=True)
    Train = models.FloatField(null=True)
    Bus = models.FloatField(null=True)
    Ferry = models.FloatField(null=True)
    Tram_light_rail = models.FloatField(null=True)
    Taxi_ride_share_service = models.FloatField(null=True)
    Car_as_driver = models.FloatField(null=True)
    Car_as_passenger = models.FloatField(null=True)
    Truck = models.FloatField(null=True)
    Motorbike_scooter = models.FloatField(null=True)
    Bicycle = models.FloatField(null=True)
    Other = models.FloatField(null=True)
    Walked_only = models.FloatField(null=True)


    def __str__(self):
        return self.Suburb