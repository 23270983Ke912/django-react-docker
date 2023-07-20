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
class Surburbs(models.Model):
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